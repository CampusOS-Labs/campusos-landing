import Link from "next/link";

import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How CampusOS collects, uses, and protects personal information on our website and school operations platform.",
  path: "/privacy",
});
const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          The information we collect depends on how you interact with CampusOS — as a school
          administrator, parent, teacher, or website visitor.
        </p>
        <p className="mt-4 font-medium text-foreground">School staff and administrators</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Name, email address, and optional profile photo when you create an account</li>
          <li>
            Authentication credentials (hashed password or OAuth tokens if you sign in with Google)
          </li>
          <li>Session data, including IP address and browser type, to keep your account secure</li>
        </ul>
        <p className="mt-4 font-medium text-foreground">Students and parents</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Student names, class, roll numbers, and admission numbers</li>
          <li>Parent or guardian names, phone numbers, and email addresses</li>
          <li>Fee and billing records, including invoice amounts, due dates, and payment status</li>
          <li>
            Payment metadata from Razorpay (such as order ID, payment method, and transaction
            timestamp) — we do not store full card or bank account numbers
          </li>
        </ul>
        <p className="mt-4 font-medium text-foreground">Teachers</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Name and phone number for attendance check-in via WhatsApp</li>
          <li>
            Precise geolocation coordinates when you check in at school, along with distance from
            the school geofence
          </li>
        </ul>
        <p className="mt-4 font-medium text-foreground">Communications</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Announcement content (text and media) sent to parents through WhatsApp</li>
          <li>
            Contact group names, descriptions, and parent contact lists you maintain in the
            dashboard
          </li>
          <li>
            Announcement logs (title, message, recipient count, and send date) — individual
            recipient phone numbers are not stored in these logs
          </li>
        </ul>
        <p className="mt-4 font-medium text-foreground">Website visitors</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            Information you submit through our contact form (name, school name, email, and message)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            Provide, operate, and maintain school management services — including billing,
            announcements, and attendance
          </li>
          <li>Process fee payments and send payment reminders to parents</li>
          <li>
            Deliver school announcements and notices to parents via WhatsApp as direct messages
          </li>
          <li>Verify teacher attendance using geolocation check-in at school premises</li>
          <li>Authenticate staff accounts and protect against unauthorized access</li>
          <li>Respond to inquiries submitted through our website or support channels</li>
          <li>Improve and develop our products and services</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Share Information",
    content: (
      <>
        <p>
          We do not sell your personal information. We share information only in the following
          circumstances:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <span className="font-medium text-foreground">Service providers</span> — with third
            parties that help us operate our services (see Section 6)
          </li>
          <li>
            <span className="font-medium text-foreground">Schools</span> — each school&apos;s
            deployment is isolated; school administrators control the student, parent, and staff
            data within their instance
          </li>
          <li>
            <span className="font-medium text-foreground">WhatsApp / Meta</span> — message content
            and phone numbers are transmitted through WhatsApp&apos;s network when you use our
            announcement or check-in features
          </li>
          <li>
            <span className="font-medium text-foreground">Legal requirements</span> — when required
            by law, regulation, legal process, or to protect the rights and safety of CampusOS, our
            users, or others
          </li>
          <li>
            <span className="font-medium text-foreground">Business transfers</span> — in connection
            with a merger, acquisition, or sale of assets, with notice to affected users where
            required
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Data Storage and Security",
    content: (
      <>
        <p>
          CampusOS is deployed as isolated instances per school, each with its own database and
          credentials. We use industry-standard security measures to protect personal information,
          including encrypted connections, hashed passwords, and session-based authentication.
        </p>
        <p className="mt-4">
          No method of transmission or storage is completely secure. While we work to protect your
          data, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    title: "5. Data Retention",
    content: (
      <>
        <p>
          We retain personal information for as long as necessary to provide our services and
          fulfill the purposes described in this policy. Specific retention practices include:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Check-in tokens expire after 10 minutes and are deleted after use or failure</li>
          <li>Password reset tokens expire after 30 minutes</li>
          <li>Staff sessions expire according to your account settings</li>
          <li>
            Invoice, contact, attendance, and announcement records are retained for the duration of
            the school&apos;s use of the service unless deletion is requested
          </li>
        </ul>
        <p className="mt-4">
          When a school ends its use of CampusOS, we will delete or return school data upon request,
          subject to any legal retention requirements.
        </p>
      </>
    ),
  },
  {
    title: "6. Third-Party Services",
    content: (
      <>
        <p>
          Our services integrate with the following third-party providers. Each has its own privacy
          policy governing how they handle data:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <span className="font-medium text-foreground">Supabase (PostgreSQL)</span> — database
            hosting for school operational data
          </li>
          <li>
            <span className="font-medium text-foreground">Razorpay</span> — payment processing for
            school fee collection; card and bank details are handled directly by Razorpay
          </li>
          <li>
            <span className="font-medium text-foreground">Evolution API / WhatsApp</span> —
            messaging infrastructure for parent announcements and teacher check-in links. When a
            school links its WhatsApp account, session credentials are stored on the messaging
            server. Messages and phone numbers are transmitted through WhatsApp&apos;s network. The
            messaging server may cache contacts and message metadata depending on its configuration
          </li>
        </ul>
        <p className="mt-4">
          We are not responsible for the privacy practices of these third parties. We encourage you
          to review their respective privacy policies.
        </p>
      </>
    ),
  },
  {
    title: "7. Cookies",
    content: (
      <>
        <p>We use a limited number of cookies and similar technologies:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <span className="font-medium text-foreground">Authentication cookies</span> — to keep
            school staff signed in to the dashboard
          </li>
          <li>
            <span className="font-medium text-foreground">Preference cookies</span> — to remember UI
            settings such as sidebar state (expires after 7 days)
          </li>
        </ul>
        <p className="mt-4">
          We do not use third-party advertising or analytics cookies on our website or application.
          For more details, see our{" "}
          <Link
            href="/cookies"
            className="motion-text-interactive underline underline-offset-2 hover:text-foreground"
          >
            Cookie Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "8. Children's Privacy",
    content: (
      <>
        <p>
          CampusOS is a school operations platform. Student information (names, class, roll numbers)
          is provided and managed by schools on behalf of parents and guardians. We do not knowingly
          collect personal information directly from children under 13.
        </p>
        <p className="mt-4">
          If you believe we have collected information from a child without appropriate consent,
          please contact us and we will take steps to delete it.
        </p>
      </>
    ),
  },
  {
    title: "9. Your Rights and Choices",
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to or restrict certain processing of your data</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p className="mt-4">
          School administrators can manage most data directly through the CampusOS dashboard. For
          other requests, contact us using the details in Section 12. We will respond within a
          reasonable timeframe and as required by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "10. International Data Transfers",
    content: (
      <>
        <p>
          CampusOS and its service providers may process data in countries other than where you are
          located, including India, Singapore, and the United States. When we transfer data
          internationally, we take steps to ensure appropriate safeguards are in place.
        </p>
      </>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we
          will update the &quot;Last updated&quot; date at the top of this page. We encourage you to
          review this policy periodically.
        </p>
      </>
    ),
  },
  {
    title: "12. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how we handle your data, contact us at{" "}
          <Link
            href="/contact"
            className="motion-text-interactive underline underline-offset-2 hover:text-foreground"
          >
            usecampusos.com/contact
          </Link>
          .
        </p>
        <p className="mt-4">CampusOS, Inc.</p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center px-4 pt-24 sm:px-6 sm:pt-32">
        <p className="text-eyebrow">Legal</p>
        <h1 className="mt-4 max-w-3xl text-center text-display">Privacy Policy</h1>
        <p className="mt-4 max-w-xl text-center text-lead">Last updated: June 12, 2026</p>

        <div className="mt-10 max-w-2xl space-y-0 sm:mt-16">
          <div className="text-body-sm border border-border p-5 sm:p-8">
            CampusOS, Inc. (&quot;CampusOS&quot;, &quot;we&quot;, &quot;our&quot;) respects your
            privacy. This Privacy Policy explains how we collect, use, disclose, and protect
            personal information when you visit our website or use our school operations platform
            and related services.
          </div>

          {sections.map((section, index) => (
            <section
              key={section.title}
              className={`border border-border border-t-0 p-8 ${index === sections.length - 1 ? "" : ""}`}
            >
              <h2 className="text-h2 font-light tracking-tight sm:text-3xl">{section.title}</h2>
              <div className="text-body-sm mt-4 space-y-4">{section.content}</div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
