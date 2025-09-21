// app/help/is-this-website-legit/page.tsx
export const metadata = {
  title: "Is this website legit? | ScamRatings Help",
  description:
    "Learn how to quickly check if a website is safe or a scam. Use domain age, SSL, company details, reviews, and refund options to decide in under 60 seconds.",
  keywords: [
    "is this website legit",
    "is this site safe",
    "how to know scam website",
    "website scam check",
  ],
};

export default function IsThisWebsiteLegit() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-extrabold text-neutral-900">Is this website legit?</h1>
      <p className="mt-3 text-[15px] leading-7 text-neutral-700">
        Before you buy, run through a quick checklist: domain age, SSL certificate, clear company
        details, refund options, and reviews on independent platforms. If any are missing, pause and
        investigate further.
      </p>
      <ul className="mt-6 list-disc pl-6 text-neutral-800 space-y-2">
        <li>Look up the domain registration date (new domains = extra caution).</li>
        <li>Check if SSL is valid and issued by a trusted authority.</li>
        <li>Verify business address and contact details.</li>
        <li>Search “{`<website>`} + scam” to find recent reviews.</li>
        <li>Confirm refund and return policies.</li>
      </ul>
      <p className="mt-6 text-sm text-neutral-600">
        Pro tip: If a deal looks too good to be true, it usually is. When in doubt, avoid paying
        with irreversible methods like bank transfer or crypto.
      </p>
    </main>
  );
}
