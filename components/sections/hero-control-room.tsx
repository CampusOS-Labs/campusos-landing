"use client";

import { useEffect, useId, useRef } from "react";
import { gsap } from "gsap";

const SOURCES = [
  { label: "CALLS", value: "14 follow-ups", y: 96 },
  { label: "SHEETS", value: "8 versions", y: 188 },
  { label: "CHATS", value: "23 unread", y: 280 },
] as const;

const OPERATIONS = [
  { label: "Fees collected", value: "96%", width: 188 },
  { label: "Attendance", value: "94%", width: 174 },
  { label: "Parent updates", value: "38 sent", width: 150 },
] as const;

export function HeroControlRoom() {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridId = useId();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const sources = gsap.utils.toArray<SVGGElement>("[data-control-source]");
        const routes = gsap.utils.toArray<SVGPathElement>("[data-control-route]");
        const rows = gsap.utils.toArray<SVGGElement>("[data-control-row]");

        gsap.set(sources, { autoAlpha: 0, x: -12 });
        gsap.set(routes, { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.set("[data-control-panel]", { autoAlpha: 0, y: 10, scale: 0.985 });
        gsap.set(rows, { autoAlpha: 0, y: 6 });
        gsap.set("[data-control-packet]", { autoAlpha: 0, x: -28 });
        gsap.set("[data-control-ready]", { autoAlpha: 0, scale: 0.8 });

        const timeline = gsap.timeline({
          delay: 0.75,
          defaults: { duration: 0.45, ease: "power3.out" },
        });

        timeline
          .to(sources, { autoAlpha: 1, x: 0, stagger: 0.07 }, 0)
          .to("[data-control-panel]", { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 }, 0.1)
          .to(routes, { strokeDashoffset: 0, stagger: 0.06, duration: 0.38 }, 0.32)
          .to("[data-control-packet]", { autoAlpha: 1, x: 0, duration: 0.16 }, 0.62)
          .to("[data-control-packet]", { x: 64, duration: 0.38, ease: "power2.inOut" }, 0.78)
          .to("[data-control-packet]", { autoAlpha: 0, duration: 0.12 }, 1.1)
          .to(rows, { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.32 }, 0.92)
          .to(
            "[data-control-ready]",
            { autoAlpha: 1, scale: 1, duration: 0.3, ease: "power2.out" },
            1.2,
          );
      }, root);

      return () => context.revert();
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="relative mx-auto flex min-h-112 w-full max-w-150 items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-x-12 top-1/2 h-72 -translate-y-1/2 border-y border-white/6" />
      <svg
        viewBox="0 0 600 440"
        role="presentation"
        className="relative block h-auto w-full overflow-visible font-sans"
      >
        <defs>
          <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeOpacity="0.035" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="600" height="440" fill={`url(#${gridId})`} />

        <text x="20" y="66" fill="white" fillOpacity="0.38" fontSize="10" letterSpacing="1.8">
          EVERYWHERE
        </text>
        <text x="246" y="38" fill="white" fillOpacity="0.38" fontSize="10" letterSpacing="1.8">
          ONE PLACE
        </text>

        <g fill="none" stroke="white" strokeOpacity="0.22" strokeWidth="1">
          <path
            data-control-route
            pathLength="1"
            d="M 170 128 H 205 V 220 H 246"
            vectorEffect="non-scaling-stroke"
          />
          <path
            data-control-route
            pathLength="1"
            d="M 170 220 H 246"
            vectorEffect="non-scaling-stroke"
          />
          <path
            data-control-route
            pathLength="1"
            d="M 170 312 H 205 V 220"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        <path
          d="M 205 220 H 246"
          fill="none"
          stroke="#ff2e5e"
          strokeOpacity="0.72"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <rect data-control-packet x="199" y="216" width="8" height="8" fill="#ff2e5e" />

        {SOURCES.map((source, index) => (
          <g key={source.label} data-control-source>
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
            <path
              d={`M 152 ${source.y + 26} l 6 6 -6 6`}
              fill="none"
              stroke="white"
              strokeOpacity="0.35"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}

        <g data-control-panel>
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
          <path
            d="M 246 98 H 580 M 292 98 V 386"
            fill="none"
            stroke="white"
            strokeOpacity="0.14"
            vectorEffect="non-scaling-stroke"
          />

          <rect x="262" y="70" width="12" height="12" fill="white" />
          <text x="284" y="81" fill="white" fontSize="13" fontWeight="600">
            CampusOS
          </text>
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

          <g fill="white" fillOpacity="0.28">
            <rect x="262" y="120" width="12" height="2" />
            <rect x="262" y="145" width="18" height="2" />
            <rect x="262" y="170" width="10" height="2" />
            <rect x="262" y="195" width="15" height="2" />
          </g>

          <text x="316" y="127" fill="white" fillOpacity="0.46" fontSize="10" letterSpacing="1.4">
            TODAY
          </text>
          <text x="316" y="153" fill="white" fontSize="21" fontWeight="500">
            Everything, in sync.
          </text>

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
                <rect x="316" y={y + 24} width="232" height="3" fill="white" fillOpacity="0.1" />
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
