import Image from "next/image";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import PixelTransition from '@/components/ui/PixelTransition';
import { BillingStackLoop } from '@/components/sections/billing-stack-loop';

export default function BillingInfrastructure() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Billing Infrastructure
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        {/*End-to-end fee collection and reconciliation for schools*/}
        Fee collection that reconciles itself, one source of truth for finance.
      </p>
      <PixelTransition
        firstContent={<div className="w-full h-full bg-white" />}
        secondContent={
          <Image
            src="/billing-infrastructure-header.png"
            alt="Billing Infrastructure"
            className="w-full h-full object-cover"
            width={1200}
            height={538}
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
      <div className="mt-16 grid w-full max-w-5xl grid-cols-3 gap-4">
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">14,283</span>
          <span className="text-sm font-medium">Students served</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Fee records stay tied to real students — no duplicate rows or mystery balances.
          </span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">97.2%</span>
          <span className="text-sm font-medium">On-time payments</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Timely reminders and clear bills keep collections ahead of term-end crunch.
          </span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">$2.4M</span>
          <span className="text-sm font-medium">Monthly processed</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Tuition and event fees flow through one ledger your finance team can trust.
          </span>
        </div>
      </div>
      <div className="w-full border-t mt-24 mb-24" />
      <h2 className="text-5xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05] mb-12">
        Outcomes for billing infrastructure
      </h2>
      <div className="max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Whether it&apos;s tuition, event fee or something else, every transaction is tracked
          in real time. Your finance team gets a single source of truth with no duplicates, no gaps, and no end-of-term reconciliation marathons.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Built for the way schools actually work. Flexible to integrate with your school's current payment plans, and seamless export to your existing
          accounting software.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Stop managing Excel sheets and manual payment logs. CampusOS Billing Infrastructure handles
          the full lifecycle of school fee collection and reconciliation.
        </p>
      </div>
      <div className="w-full border-t mt-24 mb-24" />
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-light tracking-tight font-heading leading-[1.05]">
          Built with the entire stack in mind
        </h2>
        <p className="mt-1 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Collect from systems you already trust.
        </p>
      </div>
      <BillingStackLoop />
      <div className="max-w-2xl space-y-6" />
      <NeumorphicButton href="/contact" className="mt-12">
        Get started
      </NeumorphicButton>
    </main>
  );
}
