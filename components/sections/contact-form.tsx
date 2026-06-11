"use client"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-4 gap-0 border border-border">
        <div className="border-r border-border" />
        <div className="bg-black min-h-full border-r border-border flex flex-col items-start justify-start p-6">
          <h1 className="text-white font-heading text-2xl font-medium tracking-tight leading-snug">
            Let&apos;s talk about what&apos;s breaking
          </h1>
          <p className="text-white/70 text-sm mt-3 max-w-xs leading-relaxed">
            Most ERP solutions were not built for your school and it shows.
          </p>
          <p className="text-white/70 text-sm mt-2 max-w-xs leading-relaxed">
            Clunky tools, redundant data entry, and patchwork systems quietly cost your school hours every single day.
          </p>
        </div>
        <div className="flex flex-col gap-6 border-r border-border p-6">
          <h2 className="text-2xl font-heading font-medium tracking-tight">
            How can we help?
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <FieldGroup className="gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="name" className="text-muted-foreground">Name</FieldLabel>
                  <Input id="name" type="text" placeholder="Your name" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="school-name" className="text-muted-foreground">School name</FieldLabel>
                  <Input id="school-name" type="text" placeholder="Your school" />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="email" className="text-muted-foreground">Email</FieldLabel>
                <Input id="email" type="email" placeholder="you@school.edu" />
              </Field>
              <Field>
                <FieldLabel htmlFor="message" className="text-muted-foreground">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Let's talk about your pain points..."
                  rows={5}
                />
              </Field>
              <Button type="submit" className="w-full">
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => window.open("https://cal.com/amaan-campusos/15min", "_blank")}
              >
                Schedule a demo
              </Button>
            </FieldGroup>
          </form>
        </div>
        <div />
      </div>
    </section>
  )
}
