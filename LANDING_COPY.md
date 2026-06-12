# CampusOS Landing Copy Reference

Content guide inspired by [Human Delta](https://www.humandelta.ai/) — category framing, verb-led sections, one-line subheads, specific pain points. Use this while building UI sections.

---

## What Human Delta does (reference)

Human Delta sells **knowledge infrastructure for AI agents**. They help enterprises take scattered knowledge (help centers, wikis, CRMs, runbooks) and make it **AI-ready** so chatbots, copilots, and compliance tools work in production.

Core loop: **Connect → Audit → Trace**

- **Connect** — plug into systems of record (Zendesk, Notion, ServiceNow, Salesforce, etc.)
- **Audit** — find conflicts, stale facts, broken links, policy drift
- **Trace** — tie every AI answer back to source documents; fix gaps before production

Tone: confident, technical, restrained. Headline + one sentence per section. No fluff.

---

## Style rules to follow

1. **Lead with a category noun** — "School Infrastructure", not "We are a platform that…"
2. **Subheads complete the promise** — headline = what you are; subhead = what happens when you use it
3. **One job per sentence** — if it needs "and also", split or cut
4. **Name the failure mode** — "end-of-term reconciliation marathons", not "improved efficiency"
5. **Production language** — "live at your school", "working day one", "before the term ends"
6. **Three-word verb pillars** — Connect / Audit / Run (or Sync / Flag / Fix)
7. **Minimal CTA** — "Contact" or "Get started", not noisy conversion copy

---

## Hero

Pick one pair (headline + subhead):

### Option A — infrastructure framing (closest to Human Delta)

**Headline:** School Infrastructure for Every Workflow

**Subhead:** We fix the one thing breaking your operations — so your team stops living in spreadsheets.

**CTA:** Contact

---

### Option B — sharpen current angle

**Headline:** Run your school without running on spreadsheets

**Subhead:** One broken workflow at a time — installed, trained, and working in production.

**CTA:** Contact

---

### Option C — manifesto paradox, compressed

**Headline:** India's talent deserves better infrastructure

**Subhead:** We build what's broken at your school — not another 200-feature ERP.

**CTA:** Contact

---

## Trusted by

**Label:** Trusted by

*(School names / logos — already in `TrustedBy` component)*

Optional case study link: **Read case study** → `/case-studies/[slug]` when ready

---

## Section 1 — Core loop

**Headline:** Ground your school in one source of truth

**Subhead:** Same foundation underneath billing, announcements, and parent communication.

### Pillars (3-word titles + one-line blurbs)

| Pillar | Blurb |
|--------|-------|
| **Connect** | WhatsApp, payment gateways, accounting exports, your existing tools. |
| **Audit** | Unpaid fees, missed notices, duplicate records — flagged before they become end-of-term fires. |
| **Run** | One dashboard, one workflow, live at your school — not a platform you fight for six months. |

---

## Section 2 — Problem / gaps (UI: conflict cards or audit dashboard)

**Headline:** See where school ops break

**Subhead:** One pass finds every gap — and the exact workflow that caused it.

### Example gap cards (for mock UI)

| Conflict | Sources | Severity |
|----------|---------|----------|
| "Fee paid in cash" vs "Still marked unpaid in Excel" | Finance / Class teacher | Critical |
| "Notice sent in WhatsApp group" vs "Parent never saw it" | Admin / Parent inbox | Warning |
| "Timetable updated" vs "Substitute not notified" | Office / Staff group | Warning |
| "Tuition due Friday" vs "Reminder sent Monday after deadline" | Billing / Announcements | Critical |

---

## Section 3 — Solutions

**Headline:** Fix what's broken

**Subhead:** Not a monolith. One workflow, done right.

### Billing Infrastructure

**Title:** Billing Infrastructure

**One-liner:** Fee collection that reconciles itself — one source of truth for finance.

**Longer (optional):** Whether it's tuition or event fees, every transaction is tracked in real time. Parents get clear, timely bills. Your finance team gets a single source of truth — no duplicates, no gaps, no end-of-term reconciliation marathons.

**Link:** `/solutions/billing-infrastructure`

---

### Announcements

**Title:** Announcements

**One-liner:** Notices that reach every parent — on WhatsApp, as a direct message.

**Longer (optional):** School-wide and personalized announcements delivered instantly. Parents receive direct messages, not buried group chat. Templates, fee reminders, and media — a few clicks from your dashboard.

**Link:** `/solutions/announcements`

---

### Social Media

**Title:** Social Media

**One-liner:** Your school's story — published consistently, without a marketing team.

**Longer (optional):** Plan, create, and publish across Instagram, X, Facebook, and LinkedIn from one dashboard. Or let us run it — research, edit, post, and grow your brand.

**Link:** `/solutions/socials`

---

## Section 4 — Philosophy / continuous improvement

**Headline:** One workflow at a time

**Subhead:** Every fix trains the next one.

### Feature cards

| Title | Blurb |
|-------|-------|
| **Drafts in your school's voice** | Templates and reminders that sound like you, not a vendor. |
| **Built for educators** | Not ERP consultants. Not enterprise theater. |
| **Open by default** | No black boxes. No vendor lock-in. |

---

## Section 5 — Social proof / customer stories

**Headline:** Schools running on CampusOS

**Subhead:** Real schools fixing real workflows — one at a time.

### Case study headline (template)

**"[School name] cut fee reconciliation from days to hours with CampusOS"**

**CTA:** Read story → `/case-studies/[slug]`

---

## Section 6 — Stats (billing page has examples)

Use on homepage or solution pages as needed:

| Stat | Label |
|------|-------|
| 14,283 | Students served |
| 97.2% | On-time payments |
| $2.4M | Monthly processed |

*(Replace with real numbers when available)*

---

## Bottom CTA

**Headline:** See what your school is actually running on

**CTA:** Contact → `/contact`

---

## Solution page hero subheads (quick reference)

| Page | Current | Human Delta–style |
|------|---------|-------------------|
| Billing | End-to-end fee collection and reconciliation for schools | Fee collection that reconciles itself — one source of truth for finance. |
| Announcements | School-wide and personalized announcements delivered, instantly | Notices that reach every parent — on WhatsApp, as a direct message. |
| Socials | Manage your social media outreach, growth, and more | Your school's story — published consistently, without a marketing team. |

---

## Manifesto pull quotes (for inline use)

From `_manifesto/our-manifesto.md` — already strong; compress for UI:

- "The problem isn't adoption. It's architecture."
- "Build what's broken, not what's exhaustive."
- "Schools are not businesses."
- "Spreadsheets are not a strategy."
- "India's talent deserves infrastructure that doesn't hold it back."

---

## Page section order (suggested homepage)

1. Hero (headline + subhead + CTA)
2. Trusted by
3. Core loop (Connect / Audit / Run)
4. See where school ops break (problem UI)
5. Fix what's broken (solution cards)
6. One workflow at a time (philosophy)
7. Customer stories (when ready)
8. Bottom CTA

---

## Files to update when copy is finalized

- `app/page.tsx` — homepage sections
- `app/solutions/billing-infrastructure/page.tsx`
- `app/solutions/announcements/page.tsx`
- `app/solutions/socials/page.tsx`
- `_manifesto/our-manifesto.md` — optional alignment pass
