# CampusOS Landing Design System

Visual language for the marketing site, adapted from **[Exa.ai](https://exa.ai/)** — clean graphics, plain language, editorial typography, and a calm cream field that still feels capable.

Content voice still follows [Human Delta](https://www.humandelta.ai/) patterns; see `LANDING_COPY.md`.

---

## What we take from Exa

### Editorial typography

| Role      | Exa                       | CampusOS landing                    |
| --------- | ------------------------- | ----------------------------------- |
| Headlines | Arizona serif, weight 400 | **Crimson Text** via `font-heading` |
| Body / UI | ABCDiatype sans           | **Inter** via `font-sans`           |

Headlines use `font-normal` and `tracking-[-0.03em]`. Authority comes from size and serif choice, not bold weight.

### Warm neutral palette

| Token                      | Hex       | Role                                      |
| -------------------------- | --------- | ----------------------------------------- |
| `--cream` / `--background` | `#faf9f7` | Page field                                |
| `--foreground`             | `#111827` | Primary text                              |
| `--muted-foreground`       | `#6b7280` | Descriptions                              |
| `--greige`                 | `#8c8880` | Eyebrow labels                            |
| `--primary`                | `#111111` | Black CTAs                                |
| `--link`                   | `#0972d5` | Inline links                              |
| `--ink`                    | `#181815` | Optional dark accent (not used in footer) |

### Flat surfaces, 4px corners

- `--radius: 0.25rem` (Exa uses 4px on buttons and panels)
- `.surface-panel` — bordered white panel on cream, no shadow stack
- Primary buttons are flat black; secondary buttons are gray fill

### Section rhythm

- `.section-pad` — `py-16 md:py-28` (Exa’s generous vertical spacing)
- `.section-band-white` — white content sections
- Footer + bottom CTA share `bg-background` (cream) with a top border — no black band

### Copy patterns

| Pattern            | Utility / classes                                                  |
| ------------------ | ------------------------------------------------------------------ |
| Eyebrow            | `.text-eyebrow`                                                    |
| Lead paragraph     | `.text-lead`                                                       |
| Page title         | `text-5xl md:text-6xl font-normal tracking-[-0.03em] font-heading` |
| Section title      | `text-5xl font-normal tracking-[-0.03em] font-heading`             |
| Inline action link | `text-link hover:underline`                                        |

---

## Buttons

Exa pattern: **Contact sales** (gray secondary) + **Sign up** (black primary).

```tsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

<Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
  Contact
</Link>;
```

Primary CTAs use the default black button on cream.

`NeumorphicButton` is deprecated for new work — kept in repo for reference only.

---

## Surface card pattern

```tsx
className = "surface-panel";
```

Used on capability grid, persona pages, and bordered editorial panels.

---

## Source files

| File                                 | Purpose                 |
| ------------------------------------ | ----------------------- |
| `app/globals.css`                    | Exa tokens, utilities   |
| `app/layout.tsx`                     | Inter + Crimson Text    |
| `components/ui/button.tsx`           | Flat Exa-style buttons  |
| `components/navbar.tsx`              | Cream nav, dual CTAs    |
| `components/content-page-shell.tsx`  | Inner page hero pattern |
| `components/product-page-layout.tsx` | Product detail template |
| `components/persona-page-layout.tsx` | Persona detail template |
| `app/page.tsx`                       | Homepage reference      |

---

## App inheritance

The [campusos-base-app](https://github.com/campusos/campusos-base-app) product UI keeps its own tokens. This landing repo is the source of truth for **marketing** visual language. When porting patterns to the app, carry over cream/charcoal/typography — not necessarily every marketing section layout.
