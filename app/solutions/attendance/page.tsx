import Image from "next/image";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import PixelTransition from '@/components/ui/PixelTransition';
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Attendance",
  description:
    "Notices that reach every parent on WhatsApp, as a direct message.",
  path: "/solutions/attendance",
});
export default function Attendance() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Attendance
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        {/*School-wide and personalized attendance tracking delivered, instantly*/}
        Notices that reach every parent on WhatsApp, as a direct message.
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
          <span className="text-4xl font-semibold font-heading">98.4%</span>
          <span className="text-sm font-medium">Parent read rate</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Direct WhatsApp messages get opened — not buried in group scroll.
          </span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">&lt; 2 min</span>
          <span className="text-sm font-medium">School-wide broadcast</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            One template reaches every parent without manual forwarding.
          </span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">72%</span>
          <span className="text-sm font-medium">Fewer repeat inquiries</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Clear notices cut the follow-up questions teachers answer every week.
          </span>
        </div>
      </div>
      <div className="w-full border-t mt-24 mb-24" />
      <h2 className="text-5xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05] mb-12">
        Outcomes for Announcements
      </h2>
      <div className="mt-16 max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Stuck with creating WhatsApp groups, adding parents contacts manually and sending messages?
          Sometimes parents don't even bother checking until its too late, and reach back out to teachers asking the same explained question again.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We've built a solution on top of WhatsApp, so nothing really changes for the parents getting these annoucements. What does change is the ease of use and the efficiency of the process. We help you sync contacts when onboarding, you can create groups to send out mass annoucements, each annoucement is receieved by the parent as a direct message so it feels personalized from the get go.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          You can create templates to send out mass annoucements, send them links to pay the fee as an unpaid fee payment reminder, share you kids' activity videos, images, documents and more all from our own dashboard, only a few clicks away.
        </p>
      </div>
      <NeumorphicButton href="/contact" className="mt-12">
        Get started
      </NeumorphicButton>
    </main>
  );
}
