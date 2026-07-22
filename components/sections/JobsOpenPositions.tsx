"use client";

import { useState } from "react";
import { CaretDownIcon, LinkSimpleIcon } from "@phosphor-icons/react";
import { JOBS, type JobListing } from "@/lib/jobs";
import { cn } from "@/lib/utils";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

const APPLY_EMAIL = "amaan@poke.com";

function mailtoFor(job: JobListing) {
  const subject = encodeURIComponent(`Application — ${job.title}`);
  return `mailto:${APPLY_EMAIL}?subject=${subject}`;
}

function JobRow({ job }: { job: JobListing }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const url = `${window.location.origin}/jobs#${job.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  }

  return (
    <li id={job.id} className="border-b border-black/10 scroll-mt-28">
      <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:py-6">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className="font-sans text-xl font-bold tracking-tight text-black sm:text-2xl">
              {job.title}
            </h2>
            <span
              className="inline-flex border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide text-black/70"
              style={mono}
            >
              {job.tag}
            </span>
          </div>
          <p
            className="mt-2 text-xs font-medium uppercase tracking-wide text-black/45"
            style={mono}
          >
            {job.type} · {job.location}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={`${job.id}-details`}
            onClick={() => setOpen((value) => !value)}
            className="flex size-10 items-center justify-center border border-black/15 text-black transition-transform duration-150 ease-out hover:bg-black/5 active:scale-[0.97]"
            aria-label={open ? "Hide role details" : "Show role details"}
          >
            <CaretDownIcon
              className={cn(
                "size-4 transition-transform duration-200 ease-out",
                open && "rotate-180",
              )}
            />
          </button>
          <button
            type="button"
            onClick={copyLink}
            className="flex size-10 items-center justify-center border border-black/15 text-black transition-transform duration-150 ease-out hover:bg-black/5 active:scale-[0.97]"
            aria-label={copied ? "Link copied" : "Copy link to role"}
            title={copied ? "Copied" : "Copy link"}
          >
            <LinkSimpleIcon className="size-4" />
          </button>
          <a
            href={mailtoFor(job)}
            className="inline-flex h-10 items-center justify-center bg-black px-4 text-xs font-medium tracking-wide text-white uppercase transition-transform duration-150 ease-out active:scale-[0.97]"
            style={mono}
          >
            Email us
          </a>
        </div>
      </div>

      <div
        id={`${job.id}-details`}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-5 font-sans text-base leading-relaxed text-black/60 sm:pb-6">
            {job.summary}
          </p>
        </div>
      </div>
    </li>
  );
}

export function JobsOpenPositions() {
  return (
    <section className="w-full self-stretch border-t border-black/10 bg-white text-black">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-12 md:py-28 lg:px-8 lg:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-black uppercase sm:text-3xl">
            Open positions
          </h2>
          <p className="mt-3 max-w-xs font-sans text-base leading-relaxed text-black/50">
            Roles are based in Pune, with remote for the right people.
          </p>
        </div>

        <ul className="flex w-full flex-col border-t border-black/10">
          {JOBS.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </ul>
      </div>
    </section>
  );
}
