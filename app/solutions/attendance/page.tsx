import Image from "next/image";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import PixelTransition from '@/components/ui/PixelTransition';
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Attendance",
  description:
    "Teacher check-in with GPS verification and a live attendance dashboard.",
  path: "/solutions/attendance",
});
export default function Attendance() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Attendance
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        Teachers check in on their phone. You see who&apos;s on campus in real time.
      </p>
      <PixelTransition
        firstContent={<div className="w-full h-full bg-white" />}
        secondContent={
          <Image
            src="/attendance-header.png"
            alt="Attendance"
            className="w-full h-full object-cover"
            width={1200}
            height={538}
            priority
            sizes="(max-width: 768px) 100vw, 896px"
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
          <span className="text-4xl font-semibold font-heading">&lt; 12 sec</span>
          <span className="text-sm font-medium">Teacher check-in</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Scan the QR, pick a name, confirm location — no app to install.
          </span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">GPS</span>
          <span className="text-sm font-medium">On-site verification</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Check-ins validate against your school geofence, with an override when GPS misses.
          </span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">Live</span>
          <span className="text-sm font-medium">Staff dashboard</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            See who checked in, who&apos;s still pending, and arrival times from one screen.
          </span>
        </div>
      </div>
      <div className="w-full border-t mt-24 mb-24" />
      <h2 className="text-5xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05] mb-12">
        Outcomes for Attendance
      </h2>
      <div className="mt-16 max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Most schools still rely on paper registers or memory to know who showed up.
          By the time someone asks, you&apos;re going through pages instead of looking at a clear record of who arrived and when.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          CampusOS starts with teacher attendance. Display a QR code at the entrance. Teachers scan it,
          select their name on a simple mobile page, and check in with one tap. Their location is verified
          against your school geofence, so you know the check-in happened on campus, not from home. More safety measures are in place to ensure no buddy punching is happening.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Your staff dashboard updates instantly: checked-in teachers with timestamps, a pending list for
          anyone who hasn&apos;t arrived yet, and status for on-site vs. manual override when GPS is off.
        </p>
      </div>
      <NeumorphicButton href="/contact" className="mt-12">
        Get started
      </NeumorphicButton>
    </main>
  );
}
