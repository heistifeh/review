// app/components/Footer.tsx
import Link from "next/link";
import {
  Youtube,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  SendHorizonal,
  Building2,
  Info,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      {/* Newsletter */}
      <section
        aria-labelledby="newsletter"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6"
      >
        <h2 id="newsletter" className="text-lg font-semibold text-neutral-800">
          Subscribe to our weekly newsletter
        </h2>

        <form
          action="/subscribe"
          method="post"
          className="mt-3 flex w-full max-w-xl gap-2"
        >
          <label htmlFor="email" className="sr-only">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your email…"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-700"
          />
          <button
            type="submit"
            className="rounded-none bg-red-600 px-4 text-sm font-bold text-white hover:bg-red-700"
          >
            SUBSCRIBE
          </button>
        </form>
      </section>

      {/* Link columns (dark grey band) */}
      <section className="bg-neutral-800 text-neutral-100">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          <nav aria-labelledby="col-consumers">
            <h3
              id="col-consumers"
              className="mb-3 flex items-center gap-2 text-base font-semibold"
            >
              <SendHorizonal className="h-4 w-4" aria-hidden="true" />
              For Consumers
            </h3>
            <ul className="space-y-2 text-sm">
              <Li>Report a Scam</Li>
              <Li>How to get your money back</Li>
              <Li>ScamRatings App &amp; Browser Extension</Li>
              <Li>How to Recognize a Scam Website</Li>
              <Li>Check a site for me</Li>
            </ul>
          </nav>

          <nav aria-labelledby="col-businesses">
            <h3
              id="col-businesses"
              className="mb-3 flex items-center gap-2 text-base font-semibold"
            >
              <Building2 className="h-4 w-4" aria-hidden="true" />
              For Businesses
            </h3>
            <ul className="space-y-2 text-sm">
              <Li>Claim your Website</Li>
              <Li>API &amp; Data Feed</Li>
              <Li>Install Our Logo</Li>
              <Li>Become our Partner</Li>
              <Li>Advertise on ScamRatings</Li>
            </ul>
          </nav>

          <nav aria-labelledby="col-about">
            <h3
              id="col-about"
              className="mb-3 flex items-center gap-2 text-base font-semibold"
            >
              <Info className="h-4 w-4" aria-hidden="true" />
              About ScamRatings
            </h3>
            <ul className="space-y-2 text-sm">
              <Li>About Us</Li>
              <Li>FAQ</Li>
              <Li>In the Press</Li>
              <Li>Contact</Li>
              {/* Only this one actually navigates */}
              <Li href="/blog" active>
                Blog
              </Li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Bottom red strip */}
      <section className="bg-red-600 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-3 text-xs sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Muted>Privacy Policy</Muted>
            <Divider />
            <Muted>Terms &amp; Conditions</Muted>
            <Divider />
            <Muted>Imprint</Muted>
            <Divider />
            <Muted>Disclaimer</Muted>
            <Divider />
            <Muted>Notice and Take Down</Muted>
            <Divider />
            <Muted>Sitemap</Muted>
            <Divider />
            <span>© {new Date().getFullYear()} ScamRatings</span>
          </div>

          {/* Socials (disabled/no-op) */}
          <div className="flex items-center gap-3">
            <Icon disabled label="Facebook">
              <Facebook className="h-4 w-4" />
            </Icon>
            <Icon disabled label="Twitter/X">
              <Twitter className="h-4 w-4" />
            </Icon>
            <Icon disabled label="Instagram">
              <Instagram className="h-4 w-4" />
            </Icon>
            <Icon disabled label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Icon>
            <Icon disabled label="YouTube">
              <Youtube className="h-4 w-4" />
            </Icon>
          </div>
        </div>
      </section>

      {/* Optional cookie/consent note (static) */}
      <section className="bg-neutral-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-center text-[12px] text-neutral-700">
          <p>
            We and our partners share information on your use of this website to
            help improve your experience. For more information, see our{" "}
            <Link href="/privacy" className="underline hover:text-neutral-900">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-2 flex justify-center gap-2">
            <button className="rounded border border-neutral-300 bg-white px-3 py-1 text-[12px] hover:bg-neutral-200">
              Do Not Sell My Information
            </button>
            <button className="rounded bg-green-600 px-3 py-1 text-[12px] font-semibold text-white hover:bg-green-700">
              Consent
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}

/* ---------- small helpers ---------- */

function Li({
  href,
  children,
  active = false,
}: {
  href?: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  if (active && href) {
    return (
      <li>
        <Link href={href} className="hover:underline">
          {children}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <span className="cursor-default opacity-70">{children}</span>
    </li>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return <span className="cursor-default opacity-80">{children}</span>;
}
function Divider() {
  return <span aria-hidden="true">|</span>;
}

function Icon({
  children,
  label,
  disabled = false,
  href,
}: {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
  href?: string;
}) {
  if (!disabled && href) {
    return (
      <Link
        href={href}
        aria-label={label}
        className="inline-flex items-center justify-center rounded bg-white/10 p-1.5 hover:bg-white/20"
        target="_blank"
        rel="noopener"
      >
        {children}
      </Link>
    );
  }
  return (
    <span
      aria-label={label}
      aria-disabled="true"
      className="inline-flex items-center justify-center rounded bg-white/10 p-1.5 opacity-60"
    >
      {children}
    </span>
  );
}
