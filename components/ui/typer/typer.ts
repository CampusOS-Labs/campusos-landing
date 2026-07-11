const clamp = (value: number, min: number, max: number) =>
  value < min ? min : value > max ? max : value;

const roundToStep = (value: number, step: number) => Math.round(value / step) * step;

const remap = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
  ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

function bezierEase(x: number, x1: number, y1: number, x2: number, y2: number, epsilon = 1e-6) {
  const curveX = (time: number) =>
    3 * (1 - time) ** 2 * time * x1 + 3 * (1 - time) * time ** 2 * x2 + time ** 3;
  const curveY = (time: number) =>
    3 * (1 - time) ** 2 * time * y1 + 3 * (1 - time) * time ** 2 * y2 + time ** 3;
  const derivativeX = (time: number) =>
    3 * (1 - time) ** 2 * x1 + 6 * (1 - time) * time * (x2 - x1) + 3 * time ** 2 * (1 - x2);

  let time = x;
  for (let iteration = 0; iteration < 8; iteration += 1) {
    const delta = curveX(time) - x;
    if (Math.abs(delta) < epsilon) return curveY(time);
    const derivative = derivativeX(time);
    if (Math.abs(derivative) < epsilon) break;
    time -= delta / derivative;
  }

  let low = 0;
  let high = 1;
  time = x;
  while (high - low > epsilon) {
    const currentX = curveX(time);
    if (Math.abs(currentX - x) < epsilon) break;
    if (currentX < x) low = time;
    else high = time;
    time = (low + high) / 2;
  }
  return curveY(time);
}

export const TYPER_VARIATIONS = [
  "charFill",
  "charInverse",
  "charAccent",
  "charAccentInverse",
  "charAccentFill",
  "charBorder",
] as const;

export type TyperVariation = (typeof TYPER_VARIATIONS)[number];

export type TyperOptions = {
  fps?: number;
  cycles?: number;
  cycleLength?: number;
  variations?: readonly TyperVariation[];
};

type CharacterNode = {
  element: HTMLSpanElement;
  controlPoint: number;
  currentClass: string;
};

export class Typer {
  private readonly element: HTMLElement;
  private readonly originalContent: string;
  private readonly fps: number;
  private readonly cycles: number;
  private readonly cycleLength: number;
  private readonly variations: TyperVariation[];
  private source: string;
  private length = 0;
  private frames = 0;
  private denominator = 1;
  private divisor = 1;
  private frame = 0;
  private loop: number | null = null;
  private characterNodes: CharacterNode[] = [];

  constructor(element: HTMLElement, options: TyperOptions = {}) {
    this.element = element;
    this.originalContent = element.innerHTML;
    this.source = element.textContent ?? "";
    this.fps = options.fps ?? 20;
    this.cycles = options.cycles ?? 3;
    this.cycleLength = options.cycleLength ?? 0.5;
    this.variations = [...(options.variations?.length ? options.variations : TYPER_VARIATIONS)];
    this.measure();
    this.shuffle();
    this.build();
    this.paintInitialState();
  }

  in() {
    if (!this.characterNodes.length) return;
    this.stop();
    this.frame = 0;
    this.shuffle();
    this.element.dataset.typerType = "in";
    this.loop = window.setInterval(() => this.tick(), 1000 / this.fps);
  }

  finish() {
    this.stop();
    this.characterNodes.forEach((node) => this.setClass(node, "char"));
    this.element.dataset.typerType = "done";
  }

  destroy() {
    this.stop();
    this.element.innerHTML = this.originalContent;
    delete this.element.dataset.typerType;
  }

  private measure() {
    this.length = this.source.replace(/\s/g, "").length;
    this.divisor = this.length > 1 ? this.length - 1 : 1;
    this.frames = this.length ? this.fps * (1 + this.length * 0.01) : 0;
    this.denominator = this.frames - this.frames * this.cycleLength || 1;
  }

  private build() {
    this.element.replaceChildren();
    let characterIndex = 0;

    for (const part of this.source.split(/(\s+)/)) {
      if (part.trim() === "") {
        this.element.append(document.createTextNode(part));
        continue;
      }

      const word = document.createElement("span");
      word.className = "word";
      for (const character of part) {
        const position = characterIndex / this.divisor;
        const controlPoint = roundToStep(bezierEase(position, 0, 0.75, 0.75, 0), 0.05);
        const span = document.createElement("span");
        span.className = "char charInit";
        span.textContent = character;
        this.characterNodes.push({
          element: span,
          controlPoint,
          currentClass: "char charInit",
        });
        characterIndex += 1;
        word.append(span);
      }
      this.element.append(word);
    }
  }

  private paintInitialState() {
    this.characterNodes.forEach((node) => this.setClass(node, "char charInit"));
    this.element.dataset.typerType = "initial";
  }

  private tick() {
    this.frame = clamp(this.frame + 1, 0, this.frames);
    const progress = this.frame / this.denominator;

    for (const node of this.characterNodes) {
      const localProgress = clamp(roundToStep(progress - node.controlPoint, 0.1), 0, 1);
      let className = "char charInit";

      if (localProgress > 0 && localProgress < 1) {
        const variationIndex = Math.round(remap(localProgress, 0, 1, 0, this.cycles));
        className = `char ${this.variations[variationIndex % this.variations.length]}`;
      } else if (localProgress >= 1) {
        className = "char";
      }
      this.setClass(node, className);
    }

    if (this.frame >= this.frames) this.finish();
  }

  private setClass(node: CharacterNode, className: string) {
    if (className === node.currentClass) return;
    node.currentClass = className;
    node.element.className = className;
  }

  private stop() {
    if (this.loop === null) return;
    window.clearInterval(this.loop);
    this.loop = null;
  }

  private shuffle() {
    for (let index = this.variations.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [this.variations[index], this.variations[randomIndex]] = [
        this.variations[randomIndex],
        this.variations[index],
      ];
    }
  }
}
