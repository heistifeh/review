// app/components/SiteSafetySection.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type AppLink = {
  label: string; // e.g., 'ScamAdviser App - iOS'
  href: string; // e.g., 'https://...'
  description?: string;
};

type Props = {
  domain: string; // for copy/SEO context if needed
  trustScore: number; // 0 - 100
  lastScanDays?: number; // e.g., 30
  onUpdateScoreHref?: string; // link to your score-refresh flow
  toolsHeading?: string; // override heading text if desired
  appLinks?: AppLink[]; // list items for the right card
  manualVerificationHref?: string; // bottom-right CTA
  chargebackHelpHref?: string; // bottom-left link
  className?: string;
};

export default function SiteSafetySection({
  domain,
  trustScore,
  lastScanDays = 30,
  onUpdateScoreHref = "/blog",
  toolsHeading = "Your Go-To Tools for Online Safety",
  appLinks = [
    {
      label: "ScamAdviser App - iOS",
      href: "#",
      description:
        "Your personal scam detector, on the go! Check website safety, report scams, and get instant alerts.",
    },
    {
      label: "ScamAdviser App - Android",
      href: "#",
      description:
        "Your personal scam detector, on the go! Check website safety, report scams, and get instant alerts.",
    },
  ],
  // manualVerificationHref = "/order-manual-verification",
  // chargebackHelpHref = "/get-money-back",
  className = "",
}: Props) {
  const clampedScore = Math.min(100, Math.max(0, trustScore));
  const arcPercent = clampedScore / 100;

  // Gauge geometry (semi-circle)
  const radius = 120; // px
  const stroke = 26; // px
  const circumference = Math.PI * radius;
  const progress = circumference * arcPercent;

  return (
    <section
      className={`mx-auto mt-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      aria-labelledby="site-safety-heading"
    >
      {/* Warning strip */}
      <Card className="mb-5 border-neutral-200 bg-white shadow-sm">
        <CardContent className="p-0">
          <div className="flex flex-col items-center justify-center px-4 py-6 sm:py-7">
            <h2
              id="site-safety-heading"
              className="text-xl font-extrabold tracking-tight text-neutral-800"
            >
              Warning
            </h2>
            <p className="mt-2 max-w-3xl text-center text-[15px] leading-6 text-neutral-600">
              This website hasn’t been scanned in more than {lastScanDays} days.
              Press the button to get a real-time update.
            </p>

            <div className="mt-4">
              <Button
                asChild
                className="rounded-none bg-red-600 hover:bg-red-700"
              >
                <Link href={onUpdateScoreHref} aria-label="Update score">
                  VIEW BLOG
                </Link>
              </Button>
            </div>
          </div>

          {/* thin bottom divider like inspo */}
          <div className="h-[1px] w-full bg-neutral-200" />
        </CardContent>
      </Card>

      {/* Two-column cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Trustscore card */}
        <Card className="border-neutral-200 bg-white shadow-sm">
          <CardContent className="p-4 sm:p-6">
            <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
              {/* Gauge */}
              <svg
                viewBox={`0 0 ${radius * 2} ${radius + stroke}`}
                role="img"
                aria-label={`Trustscore ${clampedScore} out of 100`}
                className="h-auto w-full"
              >
                {/* Background arc */}
                <path
                  d={describeSemiCircle(radius)}
                  fill="none"
                  stroke="#e5e7eb" /* neutral-200 */
                  strokeWidth={stroke}
                  strokeLinecap="round"
                />
                {/* Progress arc */}
                <path
                  d={describeSemiCircle(radius)}
                  fill="none"
                  stroke="#10b981" /* emerald-500/600 look */
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${progress} ${circumference}`}
                />
              </svg>

              {/* Center labels */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center pt-10">
                <div className="text-center">
                  <div className="text-lg font-semibold text-neutral-700">
                    Trustscore
                  </div>
                  <div className="text-xl font-extrabold">
                    <span className="text-emerald-600">{clampedScore}</span>{" "}
                    <span className="text-neutral-700">/ 100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer links */}
            <div className="mt-4 text-center">
              <Link
                href="/help"
                className="text-sm font-semibold text-red-700 underline underline-offset-2 hover:text-red-800"
              >
                What is this?
              </Link>
              <div className="mt-2">
                <Link
                  href="/blog"
                  className="text-xs text-neutral-500 underline underline-offset-2 hover:text-neutral-700"
                >
                  Disclaimer
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools card */}
        <Card className="border-neutral-200 bg-white shadow-sm">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-xl font-extrabold tracking-tight text-neutral-800">
              {toolsHeading}
            </h3>
            <p className="mt-2 text-sm font-semibold text-neutral-700">
              Protect yourself online with our expert-vetted tools and the
              official ScamAdviser App
            </p>

            <ol className="mt-3 space-y-2 text-[15px] leading-6">
              {appLinks.map((item, idx) => (
                <li key={item.href} className="text-neutral-700">
                  <span className="font-semibold text-red-700">
                    {idx + 1}.{" "}
                    <Link
                      href={item.href}
                      className="underline underline-offset-2 hover:text-red-800"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      {item.label}
                    </Link>
                  </span>
                  {item.description ? (
                    <span className="text-neutral-700">
                      {" "}
                      : {item.description}
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Bottom actions */}
      <div className="mt-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <Link
          href="https://giftlycard.com/legal/terms"
          target="_blank"
          className="text-sm font-semibold text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
        >
          GET YOUR MONEY BACK
        </Link>

        <Button
          asChild
          className="h-10 rounded-none bg-red-600 px-4 text-sm font-bold hover:bg-red-700"
        >
          <Link href="https://giftlycard.com/legal/privacy" target="_blank">ORDER MANUAL VERIFICATION</Link>
        </Button>
      </div>

      {/* Visually-hidden text for SEO context (optional but harmless) */}
      <p className="sr-only">
        Safety overview and tools for {domain}. Check trustscore, rescan the
        website, and learn how to protect yourself online.
      </p>
    </section>
  );

  // Helpers
  function describeSemiCircle(r: number) {
    const cx = r;
    const cy = r + stroke / 2;
    // start at left, sweep to right (semi-circle)
    return `M ${cx - r},${cy} A ${r},${r} 0 0 1 ${cx + r},${cy}`;
  }
}
