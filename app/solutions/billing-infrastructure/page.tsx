import PixelTransition from '@/components/ui/PixelTransition';

export default function BillingInfrastructure() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Billing Infrastructure
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        End-to-end fee collection and reconciliation for schools
      </p>
      <PixelTransition
        firstContent={<div className="w-full h-full bg-white" />}
        secondContent={
          <img
            src="/billing-infrastructure-header.png"
            alt="Billing Infrastructure"
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
      <div className="mt-16 grid w-full max-w-5xl grid-cols-3">
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1">
          <span className="text-4xl font-semibold font-heading">14,283</span>
          <span className="text-sm text-muted-foreground">Students served</span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1">
          <span className="text-4xl font-semibold font-heading">97.2%</span>
          <span className="text-sm text-muted-foreground">On-time payments</span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1">
          <span className="text-4xl font-semibold font-heading">$2.4M</span>
          <span className="text-sm text-muted-foreground">Monthly processed</span>
        </div>
      </div>
      <div className="w-full border-t mt-24 mb-24" />
      <h2 className="text-5xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05] mb-12">
        Outcomes for billing infrastructure
      </h2>
      <div className="max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Whether it&apos;s tuition, event fees, or cafeteria charges, every transaction is tracked
          in real time. Parents get clear, timely bills. Your finance team gets a single source of
          truth — no duplicates, no gaps, no end-of-term reconciliation marathons.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Built for the way schools actually work: flexible payment plans, partial payments,
          concessions and scholarships, late-fee automation, and seamless export to your existing
          accounting software.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Stop chasing Excel sheets and manual payment logs. CampusOS Billing Infrastructure handles
          the full lifecycle of school fee collection — from generating invoices and sending reminders
          to reconciling payments across multiple gateways.
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
