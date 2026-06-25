"use client";

import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Drizzle } from "@/components/ui/drizzle";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const initialState: ContactFormState = { status: "idle" };

function ContactIntro() {
  return (
    <>
      <h2 className="font-heading text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
        Let&apos;s talk about what&apos;s breaking
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        Most ERP solutions were not built for your school and it shows. Clunky tools, and patchwork
        systems quietly cost your school hours every single day.
      </p>
    </>
  );
}

function ContactFields({
  state,
  pending,
  onSubmit,
}: {
  state: ContactFormState;
  pending: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <>
      <h3 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
        How can we help?
      </h3>
      <form onSubmit={onSubmit} className="mt-6">
        <FieldGroup className="gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="name" className="text-muted-foreground">
                Name
              </FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                disabled={pending}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="school-name" className="text-muted-foreground">
                School name
              </FieldLabel>
              <Input
                id="school-name"
                name="school-name"
                type="text"
                placeholder="Your school"
                required
                disabled={pending}
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="email" className="text-muted-foreground">
              Email
            </FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@school.edu"
              required
              disabled={pending}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="message" className="text-muted-foreground">
              Message
            </FieldLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="Let's talk about your pain points..."
              rows={5}
              required
              disabled={pending}
            />
          </Field>
          {state.status === "error" && state.message ? (
            <p className="text-sm text-destructive" role="alert">
              {state.message}
            </p>
          ) : null}
          {state.status === "success" && state.message ? (
            <p className="text-sm text-foreground" role="status">
              {state.message}
            </p>
          ) : null}
          <Button type="submit" className="w-full sm:w-auto sm:min-w-40" disabled={pending}>
            {pending ? (
              <>
                <Drizzle size={16} label="Sending" />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full sm:w-auto sm:min-w-40"
            disabled={pending}
            onClick={() => window.open("https://cal.com/amaan-campusos/15min", "_blank")}
          >
            Schedule a demo
          </Button>
        </FieldGroup>
      </form>
    </>
  );
}

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      schoolName: String(formData.get("school-name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.schoolName || !payload.email || !payload.message) {
      setState({
        status: "error",
        message: "Please fill in every field before submitting.",
      });
      return;
    }

    setPending(true);
    setState(initialState);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Could not save your message. Please try again.");
      }

      setState({
        status: "success",
        message: "Thanks — we'll be in touch shortly.",
      });
      event.currentTarget.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again in a moment.";
      setState({
        status: "error",
        message,
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="w-full overflow-hidden border border-border">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)_minmax(24rem,32rem)_minmax(0,1fr)]">
        <div className="hidden border-r border-border lg:block" aria-hidden />

        <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-border">
          <ContactIntro />
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-8 lg:border-r lg:border-border">
          <ContactFields state={state} pending={pending} onSubmit={onSubmit} />
        </div>

        <div className="hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}
