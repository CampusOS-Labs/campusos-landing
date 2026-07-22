import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Team — the people behind Blackboard",
  description: "The relentless team behind the magic of saving schools.",
  path: "/team",
});

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

type Founder = {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  github?: string;
  x?: string;
};

const founders: Founder[] = [
  {
    name: "amaan bilwar",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/amaanbilwar/",
    github: "https://github.com/AmaanBilwar",
    x: "https://x.com/BilwarAmaan",
    bio: `amaan writes code and does collision installations for Blackboard.
Before Blackboard, he was scaling infra and building pipelines at big tech (ptsd).`,
  },
  {
    name: "samarth ghadipatil",
    role: "Co-founder",
    bio: `samarth, game dev — he's the MVP and operations guy at Blackboard.
When he's not working on Blackboard, he's either watching UFC or being emo online ^_^`,
  },
];

function bioToParagraphs(bio: string) {
  return bio.split("\n").flatMap((line) => {
    const trimmed = line.trim();
    return trimmed ? [trimmed] : [];
  });
}

function SocialLinks({ founder }: { founder: Founder }) {
  const links = [
    founder.linkedin ? { href: founder.linkedin, label: "LinkedIn" } : null,
    founder.github ? { href: founder.github, label: "GitHub" } : null,
    founder.x ? { href: founder.x, label: "X" } : null,
  ].filter(Boolean) as { href: string; label: string }[];

  if (links.length === 0) return null;

  return (
    <p className="mt-4 font-sans text-sm text-black/45">
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? " · " : null}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline-offset-4 hover:opacity-70"
          >
            {link.label}
          </a>
        </span>
      ))}
    </p>
  );
}

export default function TeamPage() {
  const team = founders.map((founder) => ({
    ...founder,
    bioParagraphs: bioToParagraphs(founder.bio),
  }));

  return (
    <main className="flex flex-1 flex-col items-center">
      <section className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-hidden bg-white px-4 pt-8 pb-8 text-black sm:min-h-[calc(100dvh-5rem)] sm:px-6 sm:pb-10 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
          <div className="relative z-10 flex w-full flex-col items-center text-center">
            <h1
              className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.03em] text-black sm:text-6xl md:text-7xl"
              style={mono}
            >
              Team
            </h1>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-black/50 sm:mt-6 sm:text-lg">
              The people doing the heavy lifting — so schools can drop the spreadsheets.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full self-stretch border-t border-black/10 bg-white text-black">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-12 md:py-28 lg:px-8 lg:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-black uppercase sm:text-3xl">
              Founders
            </h2>
            <p className="mt-3 max-w-xs font-sans text-base leading-relaxed text-black/50">
              Two people building school ops that actually ship.
            </p>
          </div>

          <ul className="flex w-full flex-col border-t border-black/10">
            {team.map((founder) => (
              <li key={founder.name} className="border-b border-black/10 py-6 sm:py-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    {founder.name}
                  </h3>
                  <span
                    className="inline-flex border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide text-black/70"
                    style={mono}
                  >
                    {founder.role.toLowerCase()}
                  </span>
                </div>
                <div className="mt-4 flex max-w-2xl flex-col gap-3 font-sans text-base leading-relaxed text-black/60">
                  {founder.bioParagraphs.map((paragraph) => (
                    <p key={`${founder.name}-${paragraph}`}>{paragraph}</p>
                  ))}
                </div>
                <SocialLinks founder={founder} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
