// app/help/parts/HelpContact.tsx
import Link from "next/link";

export default function HelpContact({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section aria-labelledby="contact-title" className={className}>
      <h2
        id="contact-title"
        className="text-xl font-extrabold text-neutral-900"
      >
        Still need help?
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <article className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-neutral-900">
            Report a website
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            Share the URL and what happened. We’ll review and help warn others.
          </p>
          <div className="mt-3">
            <Link
              href="/report"
              className="inline-block rounded-none bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
            >
              REPORT A SCAM
            </Link>
          </div>
        </article>

        <article className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-neutral-900">
            Read our guides
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            Learn how to check if a site is legit, which payment methods are
            safest, and how to get your money back.
          </p>
          <div className="mt-3">
            <Link
              href="/guides"
              className="text-sm font-semibold text-emerald-600 hover:text-red-600"
            >
              Browse guides →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
