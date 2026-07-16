"use client";

import { useEffect, useId, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

/**
 * Hero illustration: scattered school data sources (left) feed into one
 * CampusOS control panel (right). GSAP plays a short entrance, then keeps
 * data pulsing along the routes forever.
 *
 * data-* hooks used by the animation:
 *   data-control-source  — left-side source cards (CALLS / SHEETS / CHATS)
 *   data-control-route   — white connector paths from sources → panel
 *   data-control-packet  — red squares that ride each route into the panel
 *   data-control-panel   — right-side CampusOS window
 *   data-control-row     — metric rows + footer status inside the panel
 *   data-control-ready   — "LIVE" indicator (appears last)
 */

/** Full elbow paths from each source card into the panel entry (x=246). */
const ROUTES = [
  { id: "calls", d: "M 170 128 H 205 V 220 H 246" },
  { id: "sheets", d: "M 170 220 H 246" },
  { id: "chats", d: "M 170 312 H 205 V 220 H 246" },
] as const;

/** Left column: fragmented tools outside CampusOS. `y` = card top in SVG coords. */
const SOURCES = [
  { label: "CALLS", value: "14 follow-ups", y: 96 },
  { label: "EXCEL SHEETS", value: "8 versions", y: 188 },
  { label: "CHATS", value: "23 unread", y: 280 },
] as const;

/** Panel metric rows. `width` = filled portion of the progress bar (px). */
const OPERATIONS = [
  { label: "Fees collected", value: "96%", width: 188 },
  { label: "Attendance", value: "94%", width: 174 },
  { label: "Parent updates", value: "38 sent", width: 150 },
] as const;

export function HeroControlRoom() {
  const rootRef = useRef<HTMLDivElement>(null);
  // Unique pattern id so multiple instances on a page don't clash
  const gridId = useId();

  // Entrance + continuous flow — only runs when the user allows motion
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const matchMedia = gsap.matchMedia();

    // Skip animation entirely when prefers-reduced-motion is on
    matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
      // Scope all selectors to `root` so cleanup reverts only this component
      const context = gsap.context(() => {
        const sources = gsap.utils.toArray<SVGGElement>("[data-control-source]");
        const routes = gsap.utils.toArray<SVGPathElement>("[data-control-route]");
        const packets = gsap.utils.toArray<SVGRectElement>("[data-control-packet]");
        const rows = gsap.utils.toArray<SVGGElement>("[data-control-row]");

        // --- Initial hidden states (everything starts off-screen / invisible) ---
        gsap.set(sources, { autoAlpha: 0, x: -12 });
        gsap.set(routes, { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.set("[data-control-panel]", { autoAlpha: 0, y: 10, scale: 0.985 });
        gsap.set(rows, { autoAlpha: 0, y: 6 });
        gsap.set(packets, { autoAlpha: 0 });
        gsap.set("[data-control-ready]", { autoAlpha: 0, scale: 0.8 });

        const timeline = gsap.timeline({
          delay: 0.75,
          defaults: { duration: 0.45, ease: "power3.out" },
        });

        timeline
          // 0.00s — source cards fade/slide in, staggered
          .to(sources, { autoAlpha: 1, x: 0, stagger: 0.07 }, 0)
          // 0.10s — CampusOS panel fades up and scales in
          .to("[data-control-panel]", { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 }, 0.1)
          // 0.32s — connector lines draw fully into the panel
          .to(routes, { strokeDashoffset: 0, stagger: 0.06, duration: 0.42 }, 0.32)
          // 0.92s — metric rows fade up
          .to(rows, { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.32 }, 0.92)
          // 1.20s — LIVE badge pops in
          .to(
            "[data-control-ready]",
            { autoAlpha: 1, scale: 1, duration: 0.3, ease: "power2.out" },
            1.2,
          )
          // After intro: packets loop forever along the white routes
          .add(() => {
            packets.forEach((packet, index) => {
              const route = routes[index];
              if (!route) return;

              const ride = gsap.timeline({
                repeat: -1,
                delay: index * 0.42,
              });

              ride
                .set(packet, { autoAlpha: 0 })
                .to(
                  packet,
                  {
                    motionPath: {
                      path: route,
                      align: route,
                      alignOrigin: [0.5, 0.5],
                      autoRotate: false,
                    },
                    duration: 1.55,
                    ease: "none",
                  },
                  0,
                )
                .to(packet, { autoAlpha: 1, duration: 0.12 }, 0)
                .to(packet, { autoAlpha: 0, duration: 0.22 }, 1.33);
            });

            // Soft LIVE pulse so the system feels continuously online
            gsap.to("[data-control-ready] circle", {
              scale: 1.35,
              opacity: 0.55,
              duration: 0.9,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              transformOrigin: "50% 50%",
            });
          }, 1.35);
      }, root);

      return () => context.revert();
    });

    return () => matchMedia.revert();
  }, []);

  return (
    // Decorative only — screen readers ignore this whole illustration
    <div
      ref={rootRef}
      aria-hidden="true"
      className="relative mx-auto flex min-h-112 w-full max-w-150 items-center justify-center overflow-hidden"
    >
      {/* Soft horizontal frame lines behind the SVG */}
      <div className="absolute inset-x-12 top-1/2 h-72 -translate-y-1/2 border-y border-white/6" />

      <svg
        viewBox="0 0 600 440"
        role="presentation"
        className="relative block h-auto w-full overflow-visible font-sans"
      >
        {/* Subtle graph-paper background */}
        <defs>
          <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeOpacity="0.035" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="600" height="440" fill={`url(#${gridId})`} />

        {/* Column labels: chaos on the left → unified system on the right */}
        <text x="20" y="66" fill="white" fillOpacity="0.38" fontSize="10" letterSpacing="1.8">
          EVERYWHERE
        </text>
        <text x="246" y="38" fill="white" fillOpacity="0.38" fontSize="10" letterSpacing="1.8">
          ONE PLACE
        </text>

        {/* Base routes: each source reaches the panel entry (x=246) */}
        <g fill="none" stroke="white" strokeOpacity="0.22" strokeWidth="1">
          {ROUTES.map((route) => (
            <path
              key={route.id}
              data-control-route
              pathLength="1"
              d={route.d}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>

        {/* One packet per route — MotionPath rides the matching data-control-route */}
        {ROUTES.map((route) => (
          <rect
            key={`${route.id}-packet`}
            data-control-packet
            x="0"
            y="0"
            width="7"
            height="7"
            fill="#ff2e5e"
          />
        ))}

        {/* Left: source cards (scattered tools) */}
        {SOURCES.map((source, index) => (
          <g key={source.label} data-control-source>
            {/* Card chrome */}
            <rect
              x="20"
              y={source.y}
              width="150"
              height="64"
              fill="#050505"
              stroke="white"
              strokeOpacity="0.18"
              vectorEffect="non-scaling-stroke"
            />
            {/* Status square — slightly brighter per card */}
            <rect
              x="32"
              y={source.y + 13}
              width="10"
              height="10"
              fill="white"
              fillOpacity={0.18 + index * 0.06}
            />
            <text
              x="50"
              y={source.y + 22}
              fill="white"
              fillOpacity="0.48"
              fontSize="9"
              letterSpacing="1.4"
            >
              {source.label}
            </text>
            <text x="32" y={source.y + 47} fill="white" fillOpacity="0.82" fontSize="14">
              {source.value}
            </text>
            {/* Chevron pointing toward the routes / panel */}
            <path
              d={`M 152 ${source.y + 26} l 6 6 -6 6`}
              fill="none"
              stroke="white"
              strokeOpacity="0.35"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}

        {/* Right: CampusOS control panel */}
        <g data-control-panel>
          {/* Window frame */}
          <rect
            x="246"
            y="54"
            width="334"
            height="332"
            fill="#050505"
            stroke="white"
            strokeOpacity="0.32"
            vectorEffect="non-scaling-stroke"
          />
          {/* Title-bar + sidebar dividers */}
          <path
            d="M 246 98 H 580 M 292 98 V 386"
            fill="none"
            stroke="white"
            strokeOpacity="0.14"
            vectorEffect="non-scaling-stroke"
          />

          {/* App header: logo mark + name */}
          <rect x="262" y="70" width="12" height="12" fill="white" />
          <text x="284" y="81" fill="white" fontSize="13" fontWeight="600">
            CampusOS
          </text>

          {/* LIVE status — last thing to animate in */}
          <g data-control-ready style={{ transformOrigin: "548px 76px" }}>
            <circle cx="548" cy="76" r="3" fill="#ff2e5e" />
            <text
              x="538"
              y="80"
              fill="white"
              fillOpacity="0.48"
              fontSize="9"
              textAnchor="end"
              letterSpacing="1.2"
            >
              LIVE
            </text>
          </g>

          {/* Fake sidebar nav ticks */}
          <g fill="white" fillOpacity="0.28">
            <rect x="262" y="120" width="12" height="2" />
            <rect x="262" y="145" width="18" height="2" />
            <rect x="262" y="170" width="10" height="2" />
            <rect x="262" y="195" width="15" height="2" />
          </g>

          {/* Main content heading */}
          <text x="316" y="127" fill="white" fillOpacity="0.46" fontSize="10" letterSpacing="1.4">
            TODAY
          </text>
          <text x="316" y="153" fill="white" fontSize="21" fontWeight="500">
            Everything, in sync.
          </text>

          {/* Metric rows with progress bars */}
          {OPERATIONS.map((operation, index) => {
            const y = 180 + index * 55;
            return (
              <g key={operation.label} data-control-row>
                <text x="316" y={y + 13} fill="white" fillOpacity="0.68" fontSize="11">
                  {operation.label}
                </text>
                <text
                  x="548"
                  y={y + 13}
                  fill="white"
                  fillOpacity="0.86"
                  fontSize="11"
                  textAnchor="end"
                  fontVariant="tabular-nums"
                >
                  {operation.value}
                </text>
                {/* Track */}
                <rect x="316" y={y + 24} width="232" height="3" fill="white" fillOpacity="0.1" />
                {/* Fill */}
                <rect
                  x="316"
                  y={y + 24}
                  width={operation.width}
                  height="3"
                  fill="white"
                  fillOpacity="0.72"
                />
              </g>
            );
          })}

          {/* Footer status line */}
          <g data-control-row>
            <path
              d="M 316 354 H 548"
              stroke="white"
              strokeOpacity="0.12"
              vectorEffect="non-scaling-stroke"
            />
            <rect x="316" y="367" width="6" height="6" fill="#ff2e5e" />
            <text x="330" y="374" fill="white" fillOpacity="0.58" fontSize="10">
              Operations are up to date
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
