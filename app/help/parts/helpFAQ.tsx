// app/help/parts/HelpFAQ.tsx
import Link from "next/link";
import { JSX } from "react";

export default function HelpFAQ({ className = "" }: { className?: string }) {
  const faqs: { q: string; a: JSX.Element }[] = [
    {
      q: "How do I know if a website is legit or a scam?",
      a: (
        <>
          Check the domain age and ownership, SSL certificate, full company contact details,
          and independent reviews. Favor sites that support{" "}
          <Link href="/help" className="underline font-semibold">
            buyer-friendly payment methods
          </Link>{" "}
          and clear refunds. Be cautious with extreme discounts.
        </>
      ),
    },
    {
      q: "What should I do if I already paid a suspicious seller?",
      a: (
        <>
          Contact your bank or card issuer immediately to file a dispute, and save all evidence
          (receipts, emails, URLs). If you paid with a gift card, contact the issuer. Then{" "}
          <Link href="/report" className="underline font-semibold">
            report the website
          </Link>{" "}
          so others are warned.
        </>
      ),
    },
    {
      q: "Is GiftlyCard.com legit or fake?",
      a: (
        <>
          We evaluate websites using trust signals such as age, SSL, payment protection, and user
          feedback. See our blog post{" "}
          <Link href="/blog/is-giftlycard-legit-or-scam" className="underline font-semibold">
            “Is GiftlyCard.com Legit or a Scam?”
          </Link>{" "}
          for a detailed, up-to-date breakdown.
        </>
      ),
    },
    {
      q: "Are 40–60% off gift card deals legit?",
      a: (
        <>
          Steep discounts are a common red flag. Verify the platform, read recent reviews,
          and only pay through methods that allow chargebacks. When in doubt, don’t proceed.
        </>
      ),
    },
  ];

  return (
    <section aria-labelledby="faq-title" className={className}>
      <h2 id="faq-title" className="text-xl font-extrabold text-neutral-900">
        Frequently asked questions
      </h2>

      <div className="mt-4 rounded-md border border-neutral-200 bg-white shadow-sm">
        {faqs.map((item, i) => (
          <details key={i} className="group border-b border-neutral-200 last:border-none">
            <summary
              className={[
                "flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-bold tracking-wide",
                "bg-neutral-100 text-neutral-800 list-none",
                "open:bg-red-600 open:text-white",
              ].join(" ")}
            >
              <span>{item.q}</span>
              <svg
                className="h-4 w-4 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="px-4 py-4 bg-white text-[15px] leading-7 text-neutral-700">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
