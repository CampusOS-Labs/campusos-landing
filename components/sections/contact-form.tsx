"use client";

import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Drizzle } from "@/components/ui/drizzle";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const initialState: ContactFormState = { status: "idle" };

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
    <div className="flex w-full max-w-2xl flex-col items-center gap-8 text-center sm:gap-10">
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <p className="text-sm font-medium tracking-wide text-black/35" style={mono}>
          01
        </p>
        <h2 className="font-sans! text-3xl font-bold leading-[1.15] tracking-tight text-black sm:text-4xl">
          how can we help?
        </h2>
      </div>

      <form onSubmit={onSubmit} className="w-full text-left">
        <FieldGroup className="gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel
                htmlFor="name"
                className="text-sm font-medium tracking-wide text-black/35"
                style={mono}
              >
                Name
              </FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                disabled={pending}
                className="rounded-none border-black/15 font-sans"
              />
            </Field>
            <Field>
              <FieldLabel
                htmlFor="school-name"
                className="text-sm font-medium tracking-wide text-black/35"
                style={mono}
              >
                School name
              </FieldLabel>
              <Input
                id="school-name"
                name="school-name"
                type="text"
                placeholder="Your school"
                required
                disabled={pending}
                className="rounded-none border-black/15 font-sans"
              />
            </Field>
          </div>
          <Field>
            <FieldLabel
              htmlFor="email"
              className="text-sm font-medium tracking-wide text-black/35"
              style={mono}
            >
              Email
            </FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@school.edu"
              required
              disabled={pending}
              className="rounded-none border-black/15 font-sans"
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="message"
              className="text-sm font-medium tracking-wide text-black/35"
              style={mono}
            >
              Message
            </FieldLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="Let's talk about your pain points..."
              rows={5}
              required
              disabled={pending}
              className="rounded-none border-black/15 font-sans"
            />
          </Field>
          {state.status === "error" && state.message ? (
            <p className="font-sans text-sm text-red-600" role="alert">
              {state.message}
            </p>
          ) : null}
          {state.status === "success" && state.message ? (
            <p className="font-sans text-sm text-black" role="status">
              {state.message}
            </p>
          ) : null}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center justify-center gap-2 bg-black px-6 py-3 !font-sans text-base font-bold text-white transition-opacity hover:opacity-80 disabled:opacity-50 sm:min-w-40"
            >
              {pending ? (
                <>
                  <Drizzle size={16} label="Sending" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
            <button
              type="button"
              disabled={pending}
              className="inline-flex items-center justify-center border border-black/20 px-6 py-3 font-sans!  text-base font-bold text-black transition-opacity hover:opacity-70 disabled:opacity-50 sm:min-w-40"
              onClick={() => window.open("https://cal.com/amaan-campusos/15min", "_blank")}
            >
              call us
            </button>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
