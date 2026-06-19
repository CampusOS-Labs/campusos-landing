'use client';

import LogoLoop, { type LogoItem } from '@/components/ui/LogoLoop';

type SchoolEntry =
  | { name: string; src: string; alt?: string }
  | { name: string };

const TRUSTED_SCHOOLS: SchoolEntry[] = [
  { name: 'Kidzee Mundhwa, Pune', src: '/logos/schools/kidzee-mundhwa.png', alt: 'Kidzee' },
  // { name: "St. Arnold's Central School, Pune" },
  // { name: 'Riverside School' },
  // { name: 'Greenwood International' },
  // { name: 'Horizon Institute' },
  // { name: 'Cedar Valley School' },
];

const trustedLogos: LogoItem[] = TRUSTED_SCHOOLS.map((school) => {
  if ('src' in school) {
    return {
      src: school.src,
      alt: school.alt ?? school.name,
      title: school.name,
    };
  }

  return {
    node: (
      <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-muted-foreground/60">
        {school.name}
      </span>
    ),
    title: school.name,
  };
});

export function TrustedBy({ className }: { className?: string }) {
  return (
    <section className={`w-full max-w-5xl px-6 ${className ?? "mt-24"}`}>
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by
      </p>
      <div className="relative h-20 overflow-hidden">
        <LogoLoop
          logos={trustedLogos}
          speed={60}
          direction="left"
          logoHeight={86}
          gap={56}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="var(--background)"
          ariaLabel="Schools that trust CampusOS"
        />
      </div>
    </section>
  );
}
