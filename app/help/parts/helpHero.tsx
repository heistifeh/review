// app/help/parts/HelpHero.tsx
import Link from "next/link";

export default function HelpHero() {
  return (
    <section
      className="rounded-md border border-neutral-200 bg-white shadow-sm"
      aria-labelledby="help-hero-title"
    >
      <div className="flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center">
        <div>
          <h1
            id="help-hero-title"
            className="text-2xl font-extrabold tracking-tight text-neutral-900"
          >
            Need help verifying a website?
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-neutral-700">
            We show you how to spot red flags, choose safe payment methods, and
            what to do if you’ve already paid a suspicious site. If in doubt,
            report it and we’ll take a look.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-none bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
          >
            REPORT A SCAM
          </Link>
        </div>
      </div>
      <div className="h-px w-full bg-neutral-200" />
    </section>
  );
}
