import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { TrustedBy } from "@/components/sections/trusted-by";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        School Infrastructure<br />
        for Every Workflow
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
We fix only breaking operations, so your team stops living in spreadsheets.
      </p>
      <NeumorphicButton href="/contact" className="mt-8">
        Contact us
      </NeumorphicButton>
      <TrustedBy />
    </main>
  );
}
