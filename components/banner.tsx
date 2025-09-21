// app/components/Banner.tsx
"use client";

import Link from "next/link";

type BannerProps = {
  domain: string; // e.g. "giftlycard.com"
  subtitle?: string; // optional custom subtitle
  visitHref?: string; // external link to the site
};

export default function Banner({ domain, subtitle, visitHref }: BannerProps) {
  return (
    <section
      className="rounded-md border border-neutral-200 bg-white shadow-sm"
      role="region"
      max-w-7xl
      aria-label={`${domain} review banner`}
    >
      <div className="flex items-start justify-between px-4 py-4 sm:px-6 sm:py-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900">
            <span className="text-emerald-600">{domain}</span>{" "}
            <span className="text-neutral-900">Reviews</span>
          </h1>
          <p className="mt-1 text-[15px] leading-6 text-neutral-600">
            {subtitle ?? `is ${domain} legit or a scam?`}
          </p>
        </div>

        {visitHref && (
          <Link
            href={visitHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-neutral-800 underline underline-offset-2 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
          >
            Visit the site &rsaquo;
          </Link>
        )}
      </div>

      <div className="h-[1px] w-full bg-neutral-200" />
    </section>
  );
}
