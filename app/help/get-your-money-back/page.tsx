// app/help/get-your-money-back/page.tsx
import Link from "next/link";

export const metadata = {
  title: "How to Get Your Money Back After a Scam | ScamRatings Help",
  description:
    "Follow these steps to dispute a charge, request a chargeback, or contact the gift card issuer after paying a fraudulent seller.",
  keywords: [
    "get money back scam",
    "chargeback guide",
    "dispute credit card charge",
    "refund online scam purchase",
    "gift card scam help",
  ],
};

export default function GetYourMoneyBack() {
  // JSON-LD HowTo for rich results
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to get your money back after paying a scam website",
    "step": [
      { "@type": "HowToStep", "name": "Collect evidence", "text": "Save receipts, order pages, emails, chat logs, and the website URL." },
      { "@type": "HowToStep", "name": "Contact your bank", "text": "Call the number on the back of your card and open a dispute immediately." },
      { "@type": "HowToStep", "name": "Explain the issue", "text": "Describe non-delivery, counterfeit goods, or misrepresentation. Provide timestamps." },
      { "@type": "HowToStep", "name": "Follow up in writing", "text": "Submit documents through your bank’s portal and note deadlines." },
      { "@type": "HowToStep", "name": "If paid with gift card", "text": "Contact the gift card issuer right away and provide card numbers and proof of fraud." }
    ]
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <h1 className="text-2xl font-extrabold text-neutral-900">Get your money back</h1>
      <p className="mt-3 text-[15px] leading-7 text-neutral-700">
        If you paid a suspicious seller, act fast. Many banks have strict timelines for{" "}
        <strong>chargebacks</strong> and disputes.
      </p>

      {/* Stepbox */}
      <section className="mt-6 rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-neutral-900">Step-by-step</h2>
        <ol className="mt-3 list-decimal space-y-3 pl-6">
          <li className="text-[15px] leading-7 text-neutral-800">
            <span className="font-semibold">Collect evidence:</span> receipts, order confirmation,
            screenshots, emails, seller URL, and dates/times.
          </li>
          <li className="text-[15px] leading-7 text-neutral-800">
            <span className="font-semibold">Contact your bank/card issuer:</span> open a dispute
            for non-delivery, counterfeit goods, or misrepresentation.
          </li>
          <li className="text-[15px] leading-7 text-neutral-800">
            <span className="font-semibold">Submit documentation:</span> upload everything to the
            dispute portal and note any deadlines.
          </li>
          <li className="text-[15px] leading-7 text-neutral-800">
            <span className="font-semibold">If you paid with a gift card:</span> contact the issuer
            immediately; some can freeze balances if notified in time.
          </li>
        </ol>
      </section>

      {/* Do/Don't */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-neutral-900">Do</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 rounded-[3px] bg-emerald-600" aria-hidden />
              <p className="text-[15px] leading-7 text-neutral-800">
                File the dispute immediately and keep notes of call dates.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 rounded-[3px] bg-emerald-600" aria-hidden />
              <p className="text-[15px] leading-7 text-neutral-800">
                Provide concise, factual descriptions and evidence.
              </p>
            </li>
          </ul>
        </div>

        <div className="rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-neutral-900">Don’t</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 rounded-[3px] bg-red-600" aria-hidden />
              <p className="text-[15px] leading-7 text-neutral-800">
                Send more money to “unlock” a refund or shipment.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 rounded-[3px] bg-red-600" aria-hidden />
              <p className="text-[15px] leading-7 text-neutral-800">
                Delete emails or chat logs — you’ll need them for the case.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Help links */}
      <section className="mt-6 rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-neutral-900">Helpful links</h2>
        <p className="mt-2 text-[15px] leading-7 text-neutral-700">
          Not sure if the website is legit? Start here:&nbsp;
          <Link href="/help/is-this-website-legit" className="font-semibold underline">
            Is this website legit?
          </Link>
        </p>
        <p className="mt-2 text-[15px] leading-7 text-neutral-700">
          Ready to warn others and get a manual check?{" "}
          <Link href="#" className="font-semibold underline">
            Report a scam
          </Link>
          .
        </p>
      </section>

      {/* Callout CTA */}
      <div className="mt-8 rounded-md border border-red-200 bg-red-50 p-5">
        <p className="text-sm text-neutral-800">
          If a deal looks too good to be true, it probably is. When in doubt, choose payment
          methods with buyer protection and chargebacks, or don’t proceed.
        </p>
      </div>
    </main>
  );
}
