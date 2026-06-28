"use client";

import LogoLoop, { type LogoItem } from "@/components/ui/LogoLoop";

type SchoolEntry = { name: string; src: string; alt?: string } | { name: string };

const TRUSTED_SCHOOLS: SchoolEntry[] = [
  {
    name: "Kidzee Mundhwa, Pune",
    src: "/logos/schools/kidzee-mundhwa-white.png",
    alt: "Kidzee Mundhwa logo",
  },
  {
    name: "St. Arnold's Central School, Pune",
    src: "/logos/schools/arnolds-logo.webp",
    alt: "St. Arnold's Central School logo",
  },
  {
    name: "Kidzee VadgaonSheri, Pune",
    src: "/logos/schools/kidzee-vadgaonsheri-white.png",
    alt: "Kidzee VadgaonSheri logo",
  },
];

const trustedLogos: LogoItem[] = TRUSTED_SCHOOLS.map((school) => {
  if ("src" in school) {
    return {
      src: school.src,
      alt: school.alt ?? school.name,
      title: school.name,
    };
  }

  return {
    node: (
      <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-foreground/80">
        {school.name}
      </span>
    ),
    title: school.name,
  };
});

export function TrustedBy({ className }: { className?: string }) {
  const fadeOutColor = "#ffffff";

  return (
    <section className={`relative left-1/2 w-screen -translate-x-1/2 ${className ?? "mt-24"}`}>
      <p className="mb-3 text-center text-eyebrow sm:mb-4">Trusted by</p>
      <div className="relative h-16 overflow-hidden sm:h-20">
        <LogoLoop
          logos={trustedLogos}
          speed={60}
          direction="left"
          logoHeight={64}
          gap={56}
          hoverSpeed={0}
          fadeOut
          fadeOutColor={fadeOutColor}
          ariaLabel="Schools that trust CampusOS"
        />
      </div>
    </section>
  );
}
