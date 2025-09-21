// app/help/parts/HelpSafetyTips.tsx
export default function HelpSafetyTips({ className = "" }: { className?: string }) {
  const tips = [
    "Search the business name + “reviews” or “scam” and check dates on reviews.",
    "Check domain age and WHOIS; very new domains deserve extra caution.",
    "Prefer payment methods with buyer protection and chargebacks.",
    "Avoid sending crypto or bank transfers to first-time sellers.",
    "Verify a real address and customer support channel before purchase.",
  ];

  return (
    <section aria-labelledby="safety-tips-title" className={className}>
      <h2 id="safety-tips-title" className="text-xl font-extrabold text-neutral-900">
        Quick safety tips
      </h2>

      <ul className="mt-4 space-y-3 rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
        {tips.map((t, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-4 w-4 shrink-0 rounded-[3px] bg-emerald-600" aria-hidden="true" />
            <p className="text-[15px] leading-7 text-neutral-800">{t}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
