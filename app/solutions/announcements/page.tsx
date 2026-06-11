import PixelTransition from '@/components/ui/PixelTransition';

export default function Announcements() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Announcements
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        School-wide and personalized announcements delivered, instantly
      </p>
      <PixelTransition
        firstContent={<div className="w-full h-full bg-white" />}
        secondContent={
          <img
            src="/announcements-header.png"
            alt="Announcements"
            className="w-full h-full object-cover"
          />
        }
        gridSize={30}
        pixelColor="#ffffff"
        animationStepDuration={0.8}
        autoPlay
        once
        aspectRatio="44.85%"
        className="mt-16 w-full max-w-4xl rounded-2xl"
        style={{ backgroundColor: '#ffffff' }}
      />
      <div className="mt-16 max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Morning announcements shouldn&apos;t require a PA system and a printed memo. CampusOS
          Announcements lets you reach every stakeholder — students, parents, teachers, and
          staff — through their preferred channel, in seconds.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Send school-wide closures, event reminders, exam schedules, and emergency alerts with
          one click. Or target specific audiences: bus route changes to affected families, grade
          updates to subject teachers, spirit-week dress codes to upper-school only.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Delivery across push notifications, email, SMS, and school portal. Read receipts,
          scheduled sends, and an audit trail so you always know who saw what and when.
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
