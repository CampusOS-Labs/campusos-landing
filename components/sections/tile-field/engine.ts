const TAU = Math.PI * 2;

/** Black tiles on white — same field language, inverted palette. */
const REST = "#000000";
const HOVER_HEX = "#3a3a3a";
const HOVER_RGB = "58,58,58";

const MAXSZ = 1.18;
const SPEED = 0.02;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const smoothstep = (x: number, e0: number, e1: number) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
function hash(x: number, y: number) {
  const r = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return r - Math.floor(r);
}

const ALPHA_STEPS = 6;

export type TileFieldOptions = Record<string, never>;

/**
 * Wavy tile band with the original pixel-field look + hover trail.
 * Geometry is a soft horizontal wave; shading/interaction match the old text engine.
 */
export class TileField {
  private host: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private reduced: boolean;

  private dpr = Math.min(2, window.devicePixelRatio || 1);
  private viewW = 0;
  private viewH = 0;
  private cell = 10;
  private time = 0;

  private n = 0;
  private px = new Float32Array(0);
  private py = new Float32Array(0);
  private spark = new Uint8Array(0);
  private lit = new Float32Array(0);
  private seed = new Float32Array(0);

  private hasPointer = false;
  private rawX = 0;
  private rawY = 0;
  private lightX = 0;
  private lightY = 0;
  private lightSpeed = 0;

  private raf = 0;

  constructor(host: HTMLElement, _opts: TileFieldOptions = {}) {
    this.host = host;

    this.canvas = document.createElement("canvas");
    this.canvas.className = "pointer-events-none absolute inset-0 block h-full w-full";
    this.ctx = this.canvas.getContext("2d")!;
    this.host.appendChild(this.canvas);

    this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    this.resize();

    window.addEventListener("pointermove", this.onMove, { passive: true });
    window.addEventListener("pointerleave", this.onLeave);
  }

  resize() {
    const canvas = this.canvas;
    const ctx = this.ctx;

    const rect = this.host.getBoundingClientRect();
    this.viewW = rect.width;
    this.viewH = rect.height;
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    // Same density as the letterform engine
    this.cell = Math.max(2, Math.round(this.viewW / 460));
    const cell = this.cell;
    const viewW = this.viewW;
    const viewH = this.viewH;

    canvas.style.width = `${Math.round(viewW)}px`;
    canvas.style.height = `${Math.round(viewH)}px`;
    canvas.width = Math.ceil(viewW * this.dpr);
    canvas.height = Math.ceil(viewH * this.dpr);
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;

    const xs: number[] = [];
    const ys: number[] = [];
    const sp: number[] = [];
    const sd: number[] = [];

    const cols = Math.ceil(viewW / cell);
    const rows = Math.ceil(viewH / cell);
    const cy = viewH * 0.5;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cell + cell / 2;
        const y = r * cell + cell / 2;
        const u = x / Math.max(viewW, 1);

        // Soft rolling band — Human Delta shape, letterform tile density
        const waveY =
          cy +
          Math.sin(u * TAU * 1.1) * viewH * 0.11 +
          Math.sin(u * TAU * 2.2 + 0.8) * viewH * 0.055 +
          Math.sin(u * TAU * 0.5 + 2.0) * viewH * 0.07;

        const thickness =
          viewH * (0.16 + 0.1 * (0.5 + 0.5 * Math.sin(u * TAU * 1.35 + 0.35)));

        const dy = Math.abs(y - waveY) / Math.max(thickness, 1);
        if (dy >= 1) continue;

        // Two density lobes pulled inward — right mass sits nearer center, not the edge
        const radial = 1 - dy * dy;
        const leftLobe = Math.exp(-(((u - 0.26) / 0.15) ** 2));
        const rightLobe = Math.exp(-(((u - 0.66) / 0.15) ** 2));
        const lengthwise = 0.18 + 0.82 * Math.max(leftLobe, rightLobe);
        const cover = radial * lengthwise;
        if (cover < 0.42) continue;
        if (cover < 0.62 && hash(c * 1.9, r * 2.1) > (cover - 0.42) / 0.2) continue;

        xs.push(x);
        ys.push(y);
        sp.push(hash(x + 7, y - 3) > 0.82 ? 1 : 0);
        sd.push(hash(x * 1.3, y * 0.7));
      }
    }

    this.n = xs.length;
    this.px = new Float32Array(xs);
    this.py = new Float32Array(ys);
    this.spark = new Uint8Array(sp);
    this.seed = new Float32Array(sd);
    this.lit = new Float32Array(this.n);

    if (this.reduced && !this.raf) this.renderStatic();
  }

  private distSegSq(qx: number, qy: number, ax: number, ay: number, bx: number, by: number) {
    const dx = bx - ax;
    const dy = by - ay;
    if (dx === 0 && dy === 0) {
      const ex = qx - ax;
      const ey = qy - ay;
      return ex * ex + ey * ey;
    }
    const t = clamp(((qx - ax) * dx + (qy - ay) * dy) / (dx * dx + dy * dy), 0, 1);
    const ex = qx - (ax + dx * t);
    const ey = qy - (ay + dy * t);
    return ex * ex + ey * ey;
  }

  private frame = (t: number) => {
    const ctx = this.ctx;
    const { viewW, viewH, cell, n, px, py, spark, lit, seed } = this;

    ctx.clearRect(0, 0, viewW, viewH);
    this.time += SPEED;
    const time = this.time;

    const prevX = this.lightX;
    const prevY = this.lightY;
    if (this.hasPointer) {
      this.lightX += (this.rawX - this.lightX) * 0.5;
      this.lightY += (this.rawY - this.lightY) * 0.5;
    }
    const lightX = this.lightX;
    const lightY = this.lightY;
    const stepDist = Math.hypot(lightX - prevX, lightY - prevY);
    this.lightSpeed = 0.9 * this.lightSpeed + 0.1 * stepDist;
    const lightSpeed = this.lightSpeed;
    const moving = this.hasPointer;

    const reach = clamp(viewH * 0.26 + lightSpeed * 1.1, viewH * 0.2, viewH * 0.5);
    const influence = 1.5 * reach;
    const influenceSq = influence * influence;
    const minX = Math.min(prevX, lightX) - influence;
    const maxX = Math.max(prevX, lightX) + influence;
    const minY = Math.min(prevY, lightY) - influence;
    const maxY = Math.max(prevY, lightY) + influence;

    const grayP = new Path2D();
    const litList: number[] = [];
    const brightBuckets = Array.from({ length: ALPHA_STEPS }, () => new Path2D());

    for (let i = 0; i < n; i++) {
      const x = px[i];
      const y = py[i];

      let target = 0;
      if (moving && x >= minX && x <= maxX && y >= minY && y <= maxY) {
        const dSq = this.distSegSq(x, y, prevX, prevY, lightX, lightY);
        if (dSq <= influenceSq) {
          const ang = Math.atan2(y - lightY, x - lightX);
          const wobble =
            1 + 0.3 * Math.sin(3 * ang + time * 1.6) + 0.16 * Math.sin(5 * ang - time * 1.1 + 1.3);
          const f = clamp(1 - Math.sqrt(dSq) / (reach * wobble), 0, 1);
          target = f * f * (3 - 2 * f);
        }
      }

      const rate = target > lit[i] ? 0.24 : 0.02;
      lit[i] += (target - lit[i]) * rate;

      const u = x / Math.max(viewW, 1);
      const v = y / Math.max(viewH, 1);
      const flow =
        Math.sin((u * 1.6 + 0.4 * Math.sin(time * 0.3)) * TAU + time * 0.8) +
        0.7 * Math.sin((v * 2.1 - u * 0.9) * TAU - time * 0.6 + 1.7) +
        0.5 * Math.sin((u * 3.3 + v * 2.7) * TAU + time * 0.4 + 4.2) +
        0.4 * Math.cos((v * 1.3 - 1.1 * Math.sin(time * 0.2)) * TAU - time * 0.5);
      let colorAmt = smoothstep(flow, 0.1, 1.6);
      colorAmt = Math.max(colorAmt, lit[i]);

      const breathe = 0.5 + 0.5 * Math.sin(seed[i] * TAU + time * 1.3);
      const base = 0.22 + 0.1 * breathe;
      const sz = cell * (base + (MAXSZ - base) * colorAmt);
      const h = sz / 2;
      grayP.rect(x - h, y - h, sz, sz);

      if (colorAmt > 0.04) {
        const as = Math.min(ALPHA_STEPS - 1, Math.floor(colorAmt * ALPHA_STEPS));
        brightBuckets[as].rect(x - h, y - h, sz, sz);
      }

      if (lit[i] > 0.02) litList.push(i);
    }

    // Rest field — same solid white pixels as before
    ctx.fillStyle = REST;
    ctx.fill(grayP);

    // Ambient brightness wash (white, varying alpha) — replaces the old oklch pass
    for (let as = 0; as < ALPHA_STEPS; as++) {
      ctx.globalAlpha = ((as + 1) / ALPHA_STEPS) * 0.35;
      ctx.fillStyle = REST;
      ctx.fill(brightBuckets[as]);
    }
    ctx.globalAlpha = 1;

    // Pointer trail — cream hover, identical to the letterform engine
    for (const i of litList) {
      const L = lit[i];
      const x = px[i];
      const y = py[i];
      const gsz = cell * (0.95 + (MAXSZ - 0.95) * L);
      const gh = gsz / 2;
      if (spark[i]) {
        const ph = seed[i];
        const tt = 0.00025 * t;
        const amp = (0.45 + ph) * cell * 0.28;
        const jx = x + Math.sin(0.05 * x + 1.3 * tt + ph * TAU) * amp;
        const jy = y + Math.cos(0.04 * y - 0.9 * tt + ph * TAU) * amp;
        ctx.fillStyle = `rgba(${HOVER_RGB},${(0.14 * L).toFixed(3)})`;
        ctx.fillRect(jx - gh * 1.5, jy - gh * 1.5, gsz * 1.5, gsz * 1.5);
        ctx.fillStyle = `rgba(${HOVER_RGB},${(0.72 * L).toFixed(3)})`;
        ctx.fillRect(jx - gh, jy - gh, gsz, gsz);
      } else {
        ctx.fillStyle = HOVER_HEX;
        ctx.globalAlpha = 0.82 * L;
        ctx.fillRect(x - gh, y - gh, gsz, gsz);
        ctx.globalAlpha = 1;
      }
    }

    this.raf = requestAnimationFrame(this.frame);
  };

  renderStatic() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.viewW, this.viewH);
    const grayP = new Path2D();
    for (let i = 0; i < this.n; i++) {
      const sz = this.cell * 0.5;
      const h = sz / 2;
      grayP.rect(this.px[i] - h, this.py[i] - h, sz, sz);
    }
    ctx.fillStyle = REST;
    ctx.fill(grayP);
  }

  private onMove = (e: PointerEvent) => {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= -40 && y >= -40 && x <= rect.width + 40 && y <= rect.height + 40) {
      if (!this.hasPointer) {
        this.hasPointer = true;
        this.lightX = x;
        this.lightY = y;
        this.lightSpeed = 0;
      }
      this.rawX = x;
      this.rawY = y;
    } else {
      this.hasPointer = false;
    }
  };

  private onLeave = () => {
    this.hasPointer = false;
  };

  start() {
    if (this.reduced) return;
    if (!this.raf) this.raf = requestAnimationFrame(this.frame);
  }

  stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  destroy() {
    this.stop();
    window.removeEventListener("pointermove", this.onMove);
    window.removeEventListener("pointerleave", this.onLeave);
    this.canvas.remove();
  }
}
