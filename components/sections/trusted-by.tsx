'use client';

import LogoLoop, { type LogoItem } from '@/components/ui/LogoLoop';

const PLACEHOLDER_SCHOOLS = [
  'Kidzee Mundhwa, Pune',
  'St. Arnold\'s Central School, Pune',
  'Riverside School',
  'Greenwood International',
  'Horizon Institute',
  'Cedar Valley School',
];

const trustedLogos: LogoItem[] = PLACEHOLDER_SCHOOLS.map((name) => ({
  node: (
    <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-muted-foreground/60">
      {name}
    </span>
  ),
  title: name,
}));

export function TrustedBy() {
  return (
    <section className="mt-24 w-full max-w-5xl px-6">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by
      </p>
      <div className="relative h-12 overflow-hidden">
        <LogoLoop
          logos={trustedLogos}
          speed={60}
          direction="left"
          logoHeight={20}
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
