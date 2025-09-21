// app/help/parts/HelpQuickLinks.tsx
import Link from "next/link";

export default function HelpQuickLinks({ className = "" }: { className?: string }) {
  const items = [
    {
      title: "Is this website legit?",
      desc:
        "Quick checks: domain age, SSL, company details, refund options. Learn how to decide in under 60 seconds.",
      slug: "is-this-website-legit",
    },
    {
      title: "Safe payment methods",
      desc:
        "Prefer options with buyer protection and chargebacks. Avoid irreversible transfers for first-time sellers.",
      slug: "safe-payment-methods",
    },
    {
      title: "Get your money back",
      desc:
        "Steps to file disputes and chargebacks after paying a fraudulent seller. What evidence to prepare.",
      slug: "get-your-money-back",
    },
  ];

  return (
    <section aria-labelledby="quick-links-title" className={className}>
      <h2 id="quick-links-title" className="text-xl font-extrabold text-neutral-900">
        Quick help links
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.slug}
            className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600">
              <Link href={`/help/${it.slug}`} className="hover:underline">
                {it.title}
              </Link>
            </h3>
            <p className="mt-2 text-[15px] leading-7 text-neutral-700">{it.desc}</p>
            <div className="mt-3">
              <Link
                href={`/help/${it.slug}`}
                className="text-sm font-semibold text-emerald-600 hover:text-red-600"
              >
                Learn more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
