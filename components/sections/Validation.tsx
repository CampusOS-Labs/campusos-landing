export function Validation() {
  return (
    <section className="w-full self-stretch bg-black text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 py-20 text-center sm:gap-12 sm:px-6 sm:py-28 md:gap-14 md:py-32 lg:px-8">
        <div
          className="flex w-full max-w-2xl items-center gap-4"
          style={{
            fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
          }}
        >
          <p className="shrink-0 text-sm font-medium tracking-wide text-white">Blackboard</p>
          <div className="h-px min-w-0 flex-1 bg-white" aria-hidden="true" />
          <p className="shrink-0 text-sm font-medium tracking-wide text-white">is real</p>
        </div>

        <p className="max-w-2xl font-sans text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          14,283 students served and ₹2.4 Cr processed monthly. Blackboard runs school ops in
          production, never fails - no ERP required.
        </p>
      </div>
    </section>
  );
}
