import Image from "next/image";
import markdownToHtml from "@/lib/markdownToHtml";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Team",
  description:
    "The people behind CampusOS, fixing schools one workflow at a time.",
  path: "/team",
});

type Founder = {
  name: string;
  role: string;
  bio: string;
  image?: string;
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
Before CampusOS, he was 2x [Honeywell](https://automation.honeywell.com/us/en/) intern, 1x [Story](https://www.story.com/) intern.
If he's not being the reply guy on twitter, he's either writing code or satisfying customers.`,
  },
  {
    name: "Samarth Ghadipatil",
    role: "Co-founder",
    bio: "Add your co-founder's bio here — what they built before CampusOS, what part of the product they own, and why they're obsessed with fixing school operations.",
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

function bioToMarkdown(bio: string) {
  return bio
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("  \n");
}

export default async function TeamPage() {
  const team = await Promise.all(
    founders.map(async (founder) => ({
      ...founder,
      bioHtml: await markdownToHtml(bioToMarkdown(founder.bio)),
    })),
  );

  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6 pb-24">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Team
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        The people building school infrastructure, one workflow at a time.
      </p>

      <div className="mt-16 w-full max-w-6xl space-y-24">
        {team.map((founder, index) => (
          <section
            key={founder.name}
            className={index > 0 ? "pt-24 border-t" : undefined}
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="relative aspect-square w-24 md:w-28 shrink-0 overflow-hidden rounded-xl border bg-muted flex items-center justify-center">
                {founder.image ? (
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                ) : (
                  <span className="text-xl font-light font-heading text-muted-foreground/70">
                    {founder.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                )}
              </div>

              <div className="space-y-4 min-w-0 flex-1">
                <h2 className="text-4xl font-light tracking-tight font-heading leading-[1.1]">
                  {founder.name}
                </h2>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {founder.role}
                </p>

                {founder.linkedin || founder.github || founder.x ? (
                  <div className="flex items-center gap-1.5">
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

                <div
                  className="prose prose-neutral max-w-none text-muted-foreground leading-relaxed [&_p]:m-0 [&_a]:font-normal [&_a]:text-inherit [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-current [&_a]:transition-colors [&_a]:hover:text-foreground"
                  dangerouslySetInnerHTML={{ __html: founder.bioHtml }}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
