"use client";

import { useActionState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <section className="w-full">
      <div className="grid grid-cols-4 gap-0 border border-border">
        <div className="border-r border-border" />
        <div className="flex min-h-full flex-col items-start justify-start border-r border-border bg-black p-6">
          <h1 className="font-heading text-2xl font-medium leading-snug tracking-tight text-white">
            Let&apos;s talk about what&apos;s breaking
          </h1>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Most ERP solutions were not built for your school and it shows.
            Clunky tools, and patchwork systems quietly cost your school hours
            every single day.
          </p>
        </div>
        <div className="flex flex-col gap-6 border-r border-border p-6">
          <h2 className="font-heading text-2xl font-medium tracking-tight">
            How can we help?
          </h2>
          <form action={formAction}>
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
                  <FieldLabel
                    htmlFor="school-name"
                    className="text-muted-foreground"
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
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Sending..." : "Submit"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                disabled={pending}
                onClick={() =>
                  window.open("https://cal.com/amaan-campusos/15min", "_blank")
                }
              >
                Schedule a demo
              </Button>
            </FieldGroup>
          </form>
        </div>
        <div />
      </div>
    </section>
  );
}
