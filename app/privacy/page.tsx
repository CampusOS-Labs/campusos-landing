import Image from "next/image";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";

export default function Announcements() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Privacy Policy
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        Last updated: June 12th, 2026
      </p>
      <div className="mt-16 max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          CampusOS Inc. ("CampusOS", "we", "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website or use our services.
        </p>
        <div className="w-full h-px bg-muted mx-auto" />

        <h1 className="text-4xl font-light tracking-tight text-left max-w-3xl font-heading leading-[1.05]">
          1. Information We Collect
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          We may collect the following types of information:
          <ul>
            <li>
            </li>
          </ul>
        </p>
        <h1 className="text-4xl font-light tracking-tight text-left max-w-3xl font-heading leading-[1.05]">
          2. How we use information
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          We use the information we collect to:
          <ul>
            <li>
            </li>
          </ul>
        </p>
      </div>
      <NeumorphicButton href="/contact" className="mt-12">
        Get started
      </NeumorphicButton>
    </main>
  );
}
