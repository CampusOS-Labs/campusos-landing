import type { Icon } from "@phosphor-icons/react";
import {
  BellIcon,
  ChartLineUpIcon,
  ChatsCircleIcon,
  CreditCardIcon,
  MapPinIcon,
  PlugsConnectedIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/ssr";

export type ProductStat = {
  value: string;
  label: string;
  detail: string;
};

export type ProductDefinition = {
  id: string;
  label: string;
  title: string;
  headline: string;
  description: string;
  href: string;
  imageSrc?: string;
  mockVariant: "billing" | "announcements" | "attendance" | "socials";
  stats: ProductStat[];
  useCases: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    school: string;
  };
  outcomes: string[];
};

export const PRODUCTS: ProductDefinition[] = [
  {
    id: "billing-infrastructure",
    label: "Billing Infrastructure",
    title: "Billing Infrastructure",
    headline: "Fee collection that reconciles itself",
    description:
      "One ledger for tuition, events, and ad-hoc fees — no end-of-term reconciliation marathons.",
    href: "/products/billing-infrastructure",
    imageSrc: "/billing-infrastructure-header.png",
    mockVariant: "billing",
    stats: [
      {
        value: "97.2%",
        label: "On-time payments",
        detail: "Timely reminders keep collections ahead of term-end crunch.",
      },
      {
        value: "14,283",
        label: "Students served",
        detail: "Fee records tied to real students — no duplicate rows.",
      },
      {
        value: "$2.4M",
        label: "Monthly processed",
        detail: "One ledger your finance team can trust.",
      },
    ],
    useCases: [
      "Send fee reminders with payment links on WhatsApp",
      "Track partial payments and overdue balances in one view",
      "Export reconciled data to your accounting software",
    ],
    testimonial: {
      quote:
        "We stopped living in three different spreadsheets. Billing finally matches what parents actually paid.",
      name: "School admin",
      role: "Operations lead",
      school: "Kidzee Vadgaon Sheri",
    },
    outcomes: [
      "Every transaction tracked in real time with no duplicate records.",
      "Flexible payment plans that match how your school actually collects fees.",
      "Seamless export to existing accounting tools — no manual reconciliation.",
    ],
  },
  {
    id: "announcements",
    label: "Announcements",
    title: "Announcements",
    headline: "The fastest way to reach every parent",
    description:
      "Notices delivered as direct WhatsApp messages — not buried in group scroll.",
    href: "/products/announcements",
    imageSrc: "/announcements-header.png",
    mockVariant: "announcements",
    stats: [
      {
        value: "98.4%",
        label: "Parent read rate",
        detail: "Direct messages get opened — not lost in group chat.",
      },
      {
        value: "< 2 min",
        label: "School-wide broadcast",
        detail: "One template reaches every parent without manual forwarding.",
      },
      {
        value: "72%",
        label: "Fewer repeat inquiries",
        detail: "Clear notices cut follow-up questions teachers answer weekly.",
      },
    ],
    useCases: [
      "PTM reminders and holiday notices to all parents at once",
      "Fee payment reminders with links for unpaid families",
      "Share activity photos and documents from one dashboard",
    ],
    testimonial: {
      quote:
        "Parents actually read notices now. We send once and stop answering the same question ten times.",
      name: "Centre head",
      role: "School leadership",
      school: "Kidzee Mundhwa",
    },
    outcomes: [
      "Sync parent contacts on onboarding — no manual WhatsApp group setup.",
      "Each parent receives a direct message that feels personal.",
      "Templates for mass announcements, payment reminders, and media sharing.",
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    title: "Attendance",
    headline: "See who's on campus in real time",
    description:
      "Teachers check in on their phone. You see live attendance on your dashboard.",
    href: "/products/attendance",
    mockVariant: "attendance",
    stats: [
      {
        value: "< 30s",
        label: "Teacher check-in",
        detail: "GPS-verified check-in from the teacher's phone.",
      },
      {
        value: "100%",
        label: "Class coverage",
        detail: "Every section accounted for before the first period.",
      },
      {
        value: "Live",
        label: "Dashboard updates",
        detail: "Office sees arrivals as they happen — no paper registers.",
      },
    ],
    useCases: [
      "Morning check-in with GPS verification for each teacher",
      "Live dashboard for office staff during arrival windows",
      "Export attendance records for compliance and payroll",
    ],
    testimonial: {
      quote:
        "We know who's on campus before the bell rings. No more chasing paper registers at 9am.",
      name: "Operations team",
      role: "Administration",
      school: "Kidzee Mundhwa",
    },
    outcomes: [
      "Teachers check in from their phone — no shared kiosk or fingerprint machine.",
      "GPS verification confirms presence on campus.",
      "Live dashboard replaces end-of-day register reconciliation.",
    ],
  },
  {
    id: "socials",
    label: "Social Media",
    title: "Social Media",
    headline: "Your school's story, published consistently",
    description:
      "Plan, draft, and publish outreach without another agency retainer.",
    href: "/products/socials",
    mockVariant: "socials",
    stats: [
      {
        value: "3×",
        label: "Posting consistency",
        detail: "Scheduled content keeps your school's feed active.",
      },
      {
        value: "Weekly",
        label: "Content calendar",
        detail: "Plan events, admissions, and milestones in one place.",
      },
      {
        value: "1",
        label: "Brand voice",
        detail: "Templates keep every post on-message.",
      },
    ],
    useCases: [
      "Schedule admissions season posts across Instagram and Facebook",
      "Repurpose event photos from announcements into social content",
      "Track engagement without switching between five tabs",
    ],
    testimonial: {
      quote:
        "Our Instagram finally looks like a real school — not a ghost account updated once a term.",
      name: "Marketing coordinator",
      role: "Outreach",
      school: "Partner school",
    },
    outcomes: [
      "Consistent posting cadence without hiring a full-time social manager.",
      "Reuse content from school events and announcements.",
      "One place to plan, draft, and publish.",
    ],
  },
];

export const HOMEPAGE_PRODUCTS = PRODUCTS.filter((p) =>
  ["billing-infrastructure", "announcements", "attendance"].includes(p.id),
);

export function getProductById(id: string): ProductDefinition | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export const SHIFT_STATS = [
  { value: "98.4%", label: "parent read rate on WhatsApp notices" },
  { value: "< 2 min", label: "to broadcast school-wide" },
  { value: "97.2%", label: "on-time fee collection" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Connect",
    description:
      "Plug into WhatsApp, payment gateways, and the tools your school already uses.",
    mockVariant: "connect" as const,
  },
  {
    step: "02",
    title: "Audit",
    description:
      "Unpaid fees, missed notices, duplicate records — flagged before they become fires.",
    mockVariant: "audit" as const,
  },
  {
    step: "03",
    title: "Run",
    description:
      "One dashboard, one workflow, live at your school — working day one.",
    mockVariant: "run" as const,
  },
];

export type Capability = {
  icon: Icon;
  title: string;
  description: string;
};

export const CAPABILITIES: Capability[] = [
  {
    icon: ChatsCircleIcon,
    title: "WhatsApp-native delivery",
    description: "Parents get direct messages — not group scroll they never open.",
  },
  {
    icon: CreditCardIcon,
    title: "Fee reconciliation",
    description: "Payment links, partial payments, and overdue flags in one ledger.",
  },
  {
    icon: MapPinIcon,
    title: "GPS attendance",
    description: "Teachers check in from their phone. Office sees live arrivals.",
  },
  {
    icon: BellIcon,
    title: "Broadcast templates",
    description: "PTM reminders, holidays, and fee notices — send in seconds.",
  },
  {
    icon: ReceiptIcon,
    title: "Accounting export",
    description: "Reconciled data flows to the software your finance team uses.",
  },
  {
    icon: PlugsConnectedIcon,
    title: "Integrates with your stack",
    description: "Razorpay, UPI, WhatsApp Business — connect what you already have.",
  },
  {
    icon: UsersThreeIcon,
    title: "Role-based access",
    description: "Owners, admins, and teachers see exactly what they need.",
  },
  {
    icon: ChartLineUpIcon,
    title: "Live ops dashboard",
    description: "Collections, attendance, and comms status — one view.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built for school data",
    description: "Parent contacts and fee records handled with care.",
  },
];

export type PersonaDefinition = {
  id: string;
  label: string;
  href: string;
  headline: string;
  subhead: string;
  useCases: string[];
  mockVariant: "billing" | "announcements" | "attendance" | "run";
};

export const PERSONAS: PersonaDefinition[] = [
  {
    id: "owners",
    label: "School owners",
    href: "/for-owners",
    headline: "See every rupee and every parent message in one place",
    subhead:
      "Billing, announcements, and attendance — without three spreadsheets and a WhatsApp group maze.",
    useCases: [
      "Track fee collection and outstanding balances in real time",
      "Confirm parent notices are actually being read",
      "Know who's on campus before the school day starts",
    ],
    mockVariant: "run",
  },
  {
    id: "admins",
    label: "Office admins",
    href: "/for-admins",
    headline: "Stop copying contacts into WhatsApp groups",
    subhead:
      "Sync parents once, send notices in minutes, and export records without manual cleanup.",
    useCases: [
      "Broadcast PTM and holiday notices to every parent",
      "Send fee reminders with payment links to unpaid families",
      "Export attendance and billing reports for compliance",
    ],
    mockVariant: "announcements",
  },
  {
    id: "teachers",
    label: "Teachers",
    href: "/for-teachers",
    headline: "Check in on your phone. Done.",
    subhead:
      "GPS-verified attendance from your pocket — no shared kiosk, no paper register.",
    useCases: [
      "Morning check-in in under 30 seconds",
      "Send quick class updates without chasing admin",
      "Focus on teaching — not copying phone numbers",
    ],
    mockVariant: "attendance",
  },
];

export function getPersonaById(id: string): PersonaDefinition | undefined {
  return PERSONAS.find((p) => p.id === id);
}

export const WALL_OF_LOVE = [
  {
    quote:
      "We stopped living in three different spreadsheets. Billing finally matches what parents actually paid.",
    name: "Operations lead",
    school: "Kidzee Vadgaon Sheri",
  },
  {
    quote:
      "Parents actually read notices now. We send once and stop answering the same question ten times.",
    name: "Centre head",
    school: "Kidzee Mundhwa",
  },
  {
    quote:
      "We know who's on campus before the bell rings. No more chasing paper registers at 9am.",
    name: "Administration",
    school: "Kidzee Mundhwa",
  },
  {
    quote:
      "CampusOS is the one ops tool we actually kept — because it fixed real workflows, not imaginary ones.",
    name: "School leadership",
    school: "Partner school",
  },
];

export const PRODUCT_FAQ = [
  {
    question: "How long does setup take?",
    answer:
      "Most schools go live in under a week. We sync parent contacts, connect WhatsApp, and train your team on the workflows you pick first.",
  },
  {
    question: "Do parents need to install anything?",
    answer:
      "No. Announcements and payment links arrive on WhatsApp — the app parents already use every day.",
  },
  {
    question: "Can we start with one workflow?",
    answer:
      "Yes. Most schools start with announcements or billing, then add attendance when the first workflow is running smoothly.",
  },
  {
    question: "What if we already use an ERP?",
    answer:
      "CampusOS isn't another 200-feature ERP. We fix the one workflow that's breaking — and export data to what you already have.",
  },
];
