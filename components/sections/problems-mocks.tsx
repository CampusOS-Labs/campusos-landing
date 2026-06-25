import { PaperPlaneRightIcon } from "@phosphor-icons/react";

/**
 * Decorative pain-point mockups for the Problems section. Each panel mirrors the
 * tool the pain point describes — a spreadsheet, a WhatsApp chat, scattered apps —
 * so the problem reads at a glance. All roots are aria-hidden; the canonical
 * accessible description lives in the left-column summary. No focusable children.
 *
 * Colors are intentionally HARDCODED (not theme tokens): these represent real
 * apps that look the same regardless of the site's light/dark theme. Using
 * `text-foreground`/`bg-muted` here would flip to light text on the fixed-light
 * surfaces and disappear in dark mode.
 */

const MOCK_ROOT = "h-full min-h-[420px] w-full md:min-h-[460px]";

type FeeStatus = "Paid" | "Pending" | "Overdue";

function Pill({ status }: { status: FeeStatus }) {
  const styles: Record<FeeStatus, string> = {
    Paid: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    Overdue: "bg-red-50 text-red-700",
  };
  return (
    <span
      className={`inline-flex px-2 py-0.5 text-[10px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

const FEE_ROWS: { name: string; fee: string; status: FeeStatus }[] = [
  { name: "Ravi Sharma", fee: "₹24,000", status: "Overdue" },
  { name: "Aisha Khan", fee: "₹18,500", status: "Pending" },
  { name: "Neha Patil", fee: "₹24,000", status: "Paid" },
  { name: "Imran Ali", fee: "₹12,000", status: "Overdue" },
  { name: "Sara Joseph", fee: "₹18,500", status: "Pending" },
  { name: "Dev Mehta", fee: "₹24,000", status: "Paid" },
];

const SHEET_TABS = ["Branch A", "Branch B", "Hostel", "Transport"];

export function SpreadsheetMock() {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`${MOCK_ROOT} flex flex-col overflow-hidden border border-black/10 bg-white text-zinc-900 shadow-sm`}
    >
      {/* App bar */}
      <div className="flex items-center gap-2 bg-[#0f9d58] px-3 py-2 text-white">
        <span className="grid size-4 shrink-0 place-items-center bg-white/90">
          <span className="block size-2 border border-[#0f9d58]" />
        </span>
        <span className="truncate text-[13px] font-medium">Fee Follow-ups — Branch A.xlsx</span>
      </div>

      {/* Toolbar strip */}
      <div className="flex items-center gap-1.5 bg-[#e6f4ea] px-3 py-1.5">
        {[10, 6, 6, 8].map((w, i) => (
          <span key={i} className="h-1.5 bg-[#0f9d58]/40" style={{ width: w * 3 }} />
        ))}
      </div>

      {/* Column headers */}
      <div className="flex border-b border-black/10 bg-[#f1f3f4] text-[11px] text-zinc-500">
        <span className="w-7 shrink-0 border-r border-black/10 py-1 text-center" />
        {["A", "B", "C", "D"].map((c, i) => (
          <span
            key={c}
            className={`py-1 text-center ${i === 0 ? "flex-[2]" : "flex-1"} ${i < 3 ? "border-r border-black/10" : ""}`}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Rows */}
      <div className="flex-1">
        {FEE_ROWS.map((row, i) => (
          <div key={row.name} className="flex text-[12px]">
            <span className="w-7 shrink-0 border-b border-r border-black/10 bg-[#f1f3f4] py-1.5 text-center text-[11px] text-zinc-500">
              {i + 1}
            </span>
            <span
              className={`flex-[2] truncate border-b border-r border-black/10 px-2 py-1.5 ${i === 0 ? "ring-1 ring-inset ring-[#0f9d58]" : ""}`}
            >
              {row.name}
            </span>
            <span className="flex-1 border-b border-r border-black/10 px-2 py-1.5 tabular-nums">{row.fee}</span>
            <span className="flex flex-1 items-center border-b border-r border-black/10 px-2 py-1.5">
              <Pill status={row.status} />
            </span>
            <span className="flex-1 border-b border-black/10 px-2 py-1.5" />
          </div>
        ))}
      </div>

      {/* Sheet tabs — the "4 different sheets" signal */}
      <div className="mt-auto flex items-center gap-1 border-t border-black/10 bg-[#f8faf9] px-2 py-1.5 text-[11px]">
        {SHEET_TABS.map((tab, i) => (
          <span
            key={tab}
            className={
              i === 0
                ? "-mb-px border border-b-white border-black/10 bg-white px-2 py-1 font-medium text-zinc-900"
                : "px-2 py-1 text-zinc-500"
            }
          >
            {tab}
          </span>
        ))}
        <span className="px-1.5 text-[#0f9d58]">+</span>
      </div>
    </div>
  );
}

type ChatMessage = {
  from: "in" | "out";
  sender?: string;
  text: string;
  time: string;
};

const MESSAGES: ChatMessage[] = [
  { from: "in", sender: "Priya (Aarav's mom)", text: "Ma'am, is tomorrow a holiday?", time: "9:02" },
  { from: "in", sender: "Rohit S.", text: "When is the term fee due?", time: "9:04" },
  { from: "out", text: "Sharing the circular shortly 🙏", time: "9:11" },
  { from: "in", sender: "Meena K.", text: "Bus didn't come today??", time: "9:12" },
  { from: "in", sender: "Anonymous", text: "Fee due date please?", time: "9:15" },
];

export function WhatsAppMock() {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`${MOCK_ROOT} flex flex-col overflow-hidden border border-black/10 shadow-sm`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#075e54] px-3 py-2.5 text-white">
        <span className="size-8 shrink-0 rounded-full bg-white/25" />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] font-medium">Grade 6 — Parents Group</span>
          <span className="block text-[11px] text-white/70">12 members · 7 unread</span>
        </span>
        <span className="flex flex-col gap-0.5">
          {[0, 1, 2].map((d) => (
            <span key={d} className="size-1 rounded-full bg-white/70" />
          ))}
        </span>
      </div>

      {/* Chat body */}
      <div className="flex-1 space-y-2 overflow-hidden bg-[#ece5dd] px-3 py-3">
        {MESSAGES.map((msg, i) =>
          msg.from === "in" ? (
            <div key={i} className="max-w-[80%] bg-white px-3 py-1.5 text-[12px] shadow-sm">
              <p className="text-[10px] font-medium text-[#1f40ed]">{msg.sender}</p>
              <p className="text-zinc-800">{msg.text}</p>
              <p className="mt-0.5 text-right text-[10px] text-zinc-400">{msg.time}</p>
            </div>
          ) : (
            <div
              key={i}
              className="ml-auto max-w-[80%] bg-[#dcf8c6] px-3 py-1.5 text-[12px] shadow-sm"
            >
              <p className="text-zinc-800">{msg.text}</p>
              <p className="mt-0.5 text-right text-[10px] text-zinc-500">
                {msg.time} <span className="text-[#34b7f1]">✓✓</span>
              </p>
            </div>
          ),
        )}
      </div>

      {/* Composer */}
      <div className="flex items-center gap-2 border-t border-black/10 bg-[#f0f0f0] px-2 py-2">
        <span className="flex-1 bg-white px-3 py-1.5 text-[11px] text-zinc-400">
          Type a message
        </span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#25d366] text-white">
          <PaperPlaneRightIcon className="size-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

type WindowCardProps = {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  rows?: number;
};

function WindowCard({ title, className = "", style, rows = 3 }: WindowCardProps) {
  return (
    <div
      className={`absolute border border-black/10 bg-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.45)] ${className}`}
      style={style}
    >
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#f1f3f4] px-2.5 py-1.5">
        <span className="size-2 rounded-full bg-red-400/80" />
        <span className="size-2 rounded-full bg-amber-400/80" />
        <span className="size-2 rounded-full bg-emerald-400/80" />
        <span className="ml-1 truncate text-[10px] text-zinc-500">{title}</span>
      </div>
      <div className="space-y-1.5 px-2.5 py-2.5">
        {Array.from({ length: rows }).map((_, i) => (
          <span key={i} className="block h-1.5 bg-zinc-200" style={{ width: `${90 - i * 18}%` }} />
        ))}
      </div>
    </div>
  );
}

export function ScatteredToolsMock() {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`${MOCK_ROOT} relative overflow-hidden border border-black/10 bg-[#f4f4f5]`}
    >
      <WindowCard
        title="Attendance App"
        rows={3}
        className="left-3 top-5 w-44 rotate-[-4deg]"
        style={{ zIndex: 1 }}
      />
      <WindowCard
        title="Leadership Deck"
        rows={2}
        className="right-4 top-24 w-40 rotate-[3deg]"
        style={{ zIndex: 3 }}
      />
      <WindowCard
        title="Fees Tracker.xlsx"
        rows={4}
        className="bottom-20 left-12 w-48 rotate-[-2deg]"
        style={{ zIndex: 2 }}
      />

      {/* Dashed connector conveying manual data movement */}
      <span className="absolute left-1/2 top-1/2 h-0 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[18deg] border-t border-dashed border-zinc-400" />

      {/* Floating copy/paste chips */}
      <span className="absolute right-8 top-12 border border-black/10 bg-white px-2 py-1 text-[10px] text-zinc-500 shadow-sm">
        Ctrl+C
      </span>
      <span className="absolute bottom-32 right-14 border border-black/10 bg-white px-2 py-1 text-[10px] text-zinc-500 shadow-sm">
        Exported.csv
      </span>

      <span className="absolute bottom-3 left-3 text-[11px] text-zinc-500">
        Manual exports from 3 tools before 6pm
      </span>
    </div>
  );
}
