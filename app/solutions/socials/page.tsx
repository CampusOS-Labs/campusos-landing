export default function Socials() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Social Media
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        Manage your social media outreach, growth, and more
      </p>
      <div className="mt-16 max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Your school&apos;s story deserves to be told — consistently, beautifully, and without a
          dedicated marketing team. CampusOS Socials helps you plan, create, and publish content
          across Instagram, X, Facebook, and LinkedIn from one dashboard.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Schedule posts around the academic calendar, coordinate approval workflows with
          administration, and track engagement — all without handing over your school&apos;s
          social credentials to a third-party tool that doesn&apos;t understand how schools operate.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          From spirit-week campaigns and athletic highlights to college acceptance celebrations,
          keep your community connected and proud of where they belong.
        </p>
      </div>
      <a
        href="/contact"
        className="mt-12 inline-flex h-10 items-center justify-center rounded-2xl bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Get started
      </a>
    </main>
  );
}
