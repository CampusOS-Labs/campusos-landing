'use client';

import LogoLoop, { type LogoItem } from '@/components/ui/LogoLoop';

type SchoolEntry =
  | { name: string; src: string; alt?: string }
  | { name: string };

const TRUSTED_SCHOOLS: SchoolEntry[] = [
  { name: 'Kidzee Mundhwa, Pune', src: '/logos/schools/kidzee-mundhwa.png', alt: 'Kidzee' },
  {
    name: "St. Arnold's Central School, Pune",
    src: '/logos/schools/arnolds-logo.webp',
    alt: "St. Arnold's Central School logo",
  },
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
      <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-white/80">
        {school.name}
      </span>
    ),
    title: school.name,
  };
});

export function TrustedBy({ className }: { className?: string }) {
  return (
    <section className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className ?? "mt-24"}`}>
      <p className="mb-6 text-center text-eyebrow !text-white sm:mb-8">
        Trusted by
      </p>
      <div className="relative h-16 overflow-hidden sm:h-20">
        <LogoLoop
          logos={trustedLogos}
          speed={60}
          direction="left"
          logoHeight={64}
          gap={56}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#0f0f0f"
          ariaLabel="Schools that trust CampusOS"
        />
      </div>
    </section>
  );
}
