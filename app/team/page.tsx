import { ContentPageShell } from "@/components/content-page-shell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Team",
  description: "The relentless team behind the magic of saving schools.",
  path: "/team",
});

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
    name: "Amaan Bilwar",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/amaanbilwar/",
    github: "https://github.com/AmaanBilwar",
    x: "https://x.com/BilwarAmaan",
    bio: `Amaan writes code and does collison installations for CampusOS.
Before CampusOS, he was scaling infra and building pipelines at big tech.
If he's not being the reply guy on twitter, he's either working or ... working.`,
  },
  {
    name: "Samarth Ghadipatil",
    role: "Co-founder",
    bio: `Samarth, game dev, he's all things optimization and operation at CampusOS.
Before CampusOS, he was on a random discord call. Right now he's probably catching up on sleep.
When he's not working on CampusOS, he's either watching UFC or being emo online.`,
  },
];

const socials = [
  {
    key: "linkedin" as const,
    label: "LinkedIn",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
      </svg>
    ),
  },
  {
    key: "github" as const,
    label: "GitHub",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    key: "x" as const,
    label: "X",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function bioToParagraphs(bio: string) {
  return bio.split("\n").flatMap((line) => {
    const trimmed = line.trim();
    return trimmed ? [trimmed] : [];
  });
}

export default async function TeamPage() {
  const team = founders.map((founder) => ({
    ...founder,
    bioParagraphs: bioToParagraphs(founder.bio),
  }));

  return (
    <ContentPageShell
      label="Company"
      title="Team"
      description="The relentless team behind the magic of saving schools."
      fullWidth
    >
      <div className="mx-auto max-w-6xl space-y-0 pb-24 md:pb-32">
        {team.map((founder, index) => (
          <section
            key={founder.name}
            className={`border border-border p-8 md:p-10 ${index > 0 ? "border-t-0" : ""}`}
          >
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:gap-10">
              <div className="space-y-4 min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-4xl font-light tracking-tight font-heading leading-[1.1]">
                      {founder.name}
                    </h2>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {founder.role}
                    </p>
                  </div>

                  {founder.linkedin || founder.github || founder.x ? (
                    <div className="flex shrink-0 items-center gap-1.5">
                      {socials.map(({ key, label, icon }) => {
                        const href = founder[key];
                        if (!href) return null;

                        return (
                          <a
                            key={key}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {icon}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>

                <div className="prose prose-neutral max-w-none text-muted-foreground leading-relaxed [&_p]:m-0">
                  {founder.bioParagraphs.map((paragraph) => (
                    <p key={`${founder.name}-${paragraph}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </ContentPageShell>
  );
}
