// app/components/Highlights.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, X } from "lucide-react";
type Bullet = {
  text: string;
  href?: string; // optional inline link inside the text (will be underlined)
};

type Props = {
  domain: string; // e.g., "giftlycard.com"
  title?: string; // overrides default question-style title
  intro?: string[]; // paragraphs above the highlights
  positives: Bullet[];
  negatives?: Bullet[];
  detailedAnalysisHref?: string;
  visitHref?: string;
  className?: string;
};

export default function Highlights({
  domain,
  title = `Why does ${domain} have an average to good trust score?`,
  intro = [
    `${domain} is very likely not a scam but legit and reliable.`,
    `Our algorithm gave the review of ${domain} a relatively high score. We based this on data we could collect about the site on the internet such as hosting country, SSL certificate usage, and reviews found on other websites.`,
    `The rating indicates the site is safe to shop and leave your data. However, we cannot guarantee the site is not a scam. Many websites look legit but are in fact fake. Before you shop at a site you do not know,`,
  ],
  positives,
  negatives = [],
  detailedAnalysisHref = "/analysis",
  visitHref = `https://${domain}`,
  className = "",
}: Props) {
  return (
    <section
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      aria-labelledby="highlights-heading"
    >
      <Card className="border-neutral-200 bg-white shadow-sm">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          {/* Heading & intro */}
          <h2
            id="highlights-heading"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900"
          >
            {renderTitle(title, domain)}
          </h2>

          <div className="mt-3 space-y-4 text-[15px] leading-7 text-neutral-700">
            {intro.slice(0, 2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {/* last sentence includes the underlined 'check the website manually' link */}
            <p>
              {intro[2]}{" "}
              <Link
                href="/manual-check"
                className="font-semibold underline underline-offset-2 hover:text-neutral-900"
                rel="nofollow"
              >
                check the website manually
              </Link>
              .
            </p>
          </div>

          {/* Highlights grid */}
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Positive */}
            <div>
              <h3 className="text-lg font-extrabold text-emerald-600">
                Positive highlights
              </h3>
              <ul className="mt-3 space-y-3">
                {positives.map((b, idx) => (
                  <li key={`pos-${idx}`} className="flex items-start gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <p className="text-[15px] leading-7 text-neutral-800">
                      {renderBullet(b)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Negative */}
            <div>
              <h3 className="text-lg font-extrabold text-red-600">
                Negative highlights
              </h3>
              {negatives.length === 0 ? (
                <p className="mt-3 text-[15px] leading-7 text-neutral-600">
                  No significant negative signals detected.
                </p>
              ) : (
                <ul className="mt-3 space-y-3">
                  {negatives.map((b, idx) => (
                    <li key={`neg-${idx}`} className="flex items-start gap-3">
                      <X
                        className="mt-1 h-4 w-4 shrink-0 text-red-600"
                        aria-hidden="true"
                      />
                      <p className="text-[15px] leading-7 text-neutral-800">
                        {renderBullet(b)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* CTA row inside the card */}
          <div className="mt-6">
            <Button
              asChild
              className="rounded-none bg-red-600 px-4 font-bold hover:bg-red-700"
            >
              <Link href={detailedAnalysisHref}>SHOW DETAILED ANALYSIS</Link>
            </Button>
          </div>
        </CardContent>

        {/* subtle bottom border like inspo */}
        <div className="h-[1px] w-full bg-neutral-200" />
      </Card>

      {/* Big centered visit button below the card */}
      <div className="mx-auto my-6 flex justify-center">
        <Button
          asChild
          className="h-11 rounded-none bg-red-600 px-6 text-sm font-bold tracking-wide hover:bg-red-700"
        >
          <Link href={visitHref} target="_blank" rel="noopener">
            VISIT {domain.toUpperCase()}
          </Link>
        </Button>
      </div>
 {/* Consumer reviews section */}
      <div className="mt-10 bg-neutral-100 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-neutral-800">
            Consumer reviews about{" "}
            <span className="text-emerald-600">giftlycard.com</span>
          </h2>

          <div className="mt-6 rounded-md border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-emerald-600 text-emerald-600">
                <Star className="h-6 w-6 fill-emerald-600" aria-hidden="true" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Very positive reviews
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  <span className="block">Total reviews: 212</span>
                  <span className="block">Average score: 4.7 stars</span>
                  <Link
                    href="#"
                    className="text-emerald-600 underline underline-offset-2 hover:text-emerald-700"
                  >
                    Learn more
                  </Link>
                </p>
                <p className="mt-3 text-sm text-neutral-700">
                  The total score is based on reviews found on the following
                  sites:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                  <li>
                    <Link
                      href="#"
                      className="text-emerald-600 underline underline-offset-2 hover:text-emerald-700"
                    >
                      Trustpilot: 4.7/5 stars, 212 reviews
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Report button */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              REPORT GIFTLYCARD.COM
            </button>
          </div>
        </div>
      </div>
      {/* Hidden SEO helper sentence */}
      <p className="sr-only">
        Positive and negative highlights explaining why {domain} has its current
        trust score, plus links to detailed analysis.
      </p>
    </section>
  );
}

/* ---------- Helpers ---------- */

function renderBullet(b: Bullet) {
  if (!b.href) return b.text;
  return (
    <>
      {b.text.split("[link]")[0]}
      <Link
        href={b.href}
        className="font-semibold underline underline-offset-2 hover:text-neutral-900"
        rel="nofollow"
      >
        {extractLinkedText(b.text)}
      </Link>
      {b.text.split("[/link]").slice(1).join("")}
    </>
  );
}

/**
 * Mini helper to allow simple inline linking by placing the visible
 * link text between [link] ... [/link] inside Bullet.text.
 * Example:
 * { text: 'offers "get your money back" [link]friendly payment methods[/link]', href:'/payments' }
 */
function extractLinkedText(text: string) {
  const start = text.indexOf("[link]") + 6;
  const end = text.indexOf("[/link]");
  return text.slice(start, end);
}

function renderTitle(title: string, domain: string) {
  // Color the domain green inside the title if present
  const parts = title.split(domain);
  if (parts.length === 1) return title;
  return (
    <>
      {parts[0]}
      <span className="text-emerald-600 underline-offset-2">{domain}</span>
      {parts.slice(1).join(domain)}
    </>
  );
}
