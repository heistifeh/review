// app/help/safe-payment-methods/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Safe Payment Methods for Online Shopping | ScamRatings Help",
  description:
    "Learn which payment methods are safest online. Understand buyer protection, chargebacks, and what to avoid when a website looks risky.",
  keywords: [
    "safe payment methods online",
    "buyer protection",
    "chargeback",
    "is this website legit",
    "avoid bank transfer crypto first-time seller",
  ],
};

export default function SafePaymentMethods() {
  // JSON-LD HowTo (eligible for rich results)
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to pay safely online",
    "description":
      "Step-by-step guide to choosing safe payment methods with buyer protection and chargebacks.",
    "step": [
      { "@type": "HowToStep", "name": "Check buyer protection", "text": "Prefer cards or platforms with clear dispute mechanisms and chargebacks." },
      { "@type": "HowToStep", "name": "Avoid irreversible methods", "text": "Do not use bank transfers, wires or crypto with first-time sellers." },
      { "@type": "HowToStep", "name": "Verify seller details", "text": "Confirm company name, address, and support channel before paying." },
      { "@type": "HowToStep", "name": "Keep evidence", "text": "Save order pages, emails, and receipts in case you need to dispute." }
    ]
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
      
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <h1 className="text-2xl font-extrabold text-neutral-900">Safe payment methods</h1>
      <p className="mt-3 text-[15px] leading-7 text-neutral-700">
        The safest way to pay online is to choose methods with{" "}
        <strong>buyer protection</strong> and <strong>chargeback</strong> options. When a website is
        new to you or you’re unsure if it’s legit, avoid irreversible payments.
      </p>

      {/* Recommended methods */}
      <section className="mt-6 rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-neutral-900">Recommended</h2>
        <ul className="mt-3 space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-4 w-4 rounded-[3px] bg-emerald-600" aria-hidden />
            <p className="text-[15px] leading-7 text-neutral-800">
              <strong>Credit cards (Visa/Mastercard/Amex)</strong>: strongest chargeback rights when
              goods don’t arrive or are misrepresented.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-4 w-4 rounded-[3px] bg-emerald-600" aria-hidden />
            <p className="text-[15px] leading-7 text-neutral-800">
              <strong>Well-known payment processors</strong> offering disputes and purchase
              protection (read their coverage terms).
            </p>
          </li>
        </ul>
      </section>

      {/* Use with caution */}
      <section className="mt-6 rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-neutral-900">Use with caution</h2>
        <ul className="mt-3 space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-4 w-4 rounded-[3px] bg-red-600" aria-hidden />
            <p className="text-[15px] leading-7 text-neutral-800">
              <strong>Bank transfers / wires</strong>: typically irreversible. Avoid for first-time
              or unverified sellers.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-4 w-4 rounded-[3px] bg-red-600" aria-hidden />
            <p className="text-[15px] leading-7 text-neutral-800">
              <strong>Cryptocurrency</strong>: fast but final. Only use with known, established
              platforms—no chargebacks if things go wrong.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-4 w-4 rounded-[3px] bg-red-600" aria-hidden />
            <p className="text-[15px] leading-7 text-neutral-800">
              <strong>Gift cards</strong>: common scam vector. If asked to “pay with a gift card,”
              stop and re-evaluate.
            </p>
          </li>
        </ul>
      </section>

      {/* Quick checklist */}
      <section className="mt-6 rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-neutral-900">Before you pay — quick checklist</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[15px] leading-7 text-neutral-800">
          <li>Does the site show a real company name, address, and support contact?</li>
          <li>Is the domain older than a few months and using valid SSL?</li>
          <li>Are there recent reviews on independent platforms?</li>
          <li>Do you have a clear refund/returns policy screenshot?</li>
        </ul>
        <p className="mt-4 text-sm text-neutral-700">
          Still unsure if the site is legit? Read{" "}
          <Link href="/help/is-this-website-legit" className="font-semibold underline">
            Is this website legit?
          </Link>{" "}
          or{" "}
          <Link href="/report" className="font-semibold underline">
            report it
          </Link>{" "}
          for a manual check.
        </p>
      </section>
    </main>
  );
}
