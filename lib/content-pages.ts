export type CaseStudyCardMeta = {
  products: string[];
  highlight: string;
};

export const CASE_STUDY_CARD_META: Record<string, CaseStudyCardMeta> = {
  "kidzee-vadgaon-sheri": {
    products: ["Billing Infrastructure"],
    highlight: "Live in under a week",
  },
  "kidzee-mundhwa": {
    products: ["Attendance", "Announcements"],
    highlight: "GPS check-in + WhatsApp DMs",
  },
  "company-brain-for-schools": {
    products: ["Connect", "Audit", "Run"],
    highlight: "One source of truth",
  },
};

export function getCaseStudyCardMeta(slug: string): CaseStudyCardMeta {
  return (
    CASE_STUDY_CARD_META[slug] ?? {
      products: ["CampusOS"],
      highlight: "Workflow fixed in production",
    }
  );
}

export const MANIFESTO_SECTIONS = [
  {
    id: "problem",
    label: "The problem",
    title: "Schools don't resist better tools. They resist tools that don't fit.",
    body: "Fees in Excel. Parents in WhatsApp groups. Timetables that collapse when one teacher is absent. The market's answer is always the monolithic ERP — 200 features that deliver nothing useful.",
  },
  {
    id: "truth",
    label: "The truth",
    title: "You cannot build one platform that works for 1.5M schools.",
    body: "Each school has its own broken workflow, its own constraints. Spreadsheets aren't a strategy — they're a symptom of software that wasn't built for how schools actually operate.",
  },
  {
    id: "solution",
    label: "The solution",
    title: "Build what's broken, not what's exhaustive.",
    body: "Tell us the one thing that hurts the most. We build just that — fixed, installed at your school, your staff trained on it. One workflow at a time until the ops stop breaking.",
  },
];
