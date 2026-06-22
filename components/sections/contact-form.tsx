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

function ContactIntro() {
  return (
    <>
      <h2 className="font-heading text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
        Let&apos;s talk about what&apos;s breaking
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
        Most ERP solutions were not built for your school and it shows. Clunky tools, and patchwork
        systems quietly cost your school hours every single day.
      </p>
    </>
  );
}

function ContactFields({
  state,
  formAction,
  pending,
}: {
  state: ContactFormState;
  formAction: (payload: FormData) => void;
  pending: boolean;
}) {
  return (
    <>
      <h3 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
        How can we help?
      </h3>
      <form action={formAction} className="mt-6">
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
            {pending ? "Sending..." : "Submit"}
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
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <section className="w-full overflow-hidden border border-border">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)_minmax(24rem,32rem)_minmax(0,1fr)]">
        <div className="hidden border-r border-border lg:block" aria-hidden />

        <div className="border-b border-border bg-black p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-border">
          <ContactIntro />
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-8 lg:border-r lg:border-border">
          <ContactFields state={state} formAction={formAction} pending={pending} />
        </div>

        <div className="hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}
