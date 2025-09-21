// app/components/facts/FactDetails.tsx
import Link from "next/link";

type Whois = {
  registrantCountry?: string;
  status?: string[];
  nameServers?: string[];
  createdAt?: string;
  updatedAt?: string;
  expiresAt?: string;
};

type WebsiteData = {
  website?: string;
  redirectingFrom?: string[];
  title?: string;
  description?: string;
  audience?: string[];
  regions?: string[];
  websiteSpeed?: "Slow" | "Average" | "Fast";
  ssl?: "No SSL" | "DV SSL" | "OV SSL" | "EV SSL";
  sslIssuer?: string;
  techStack?: string[];
  registrar?: string;
  whoisCreatedAt?: string;
};

type Props = {
  domain: string;
  alexaRank?: number;
  backlinks?: number;
  domainAgeYears?: number;
  whois?: Whois;
  websiteData?: WebsiteData;
  className?: string;
};

export default function FactDetails({
  domain,
  alexaRank = 313_034,
  backlinks = 1_230,
  domainAgeYears = 11,
  whois = {
    registrantCountry: "Hidden (Privacy Service)",
    status: ["clientTransferProhibited", "clientUpdateProhibited"],
    nameServers: ["ns1.example-dns.com", "ns2.example-dns.com"],
    createdAt: "2014-05-29",
    updatedAt: "2025-05-20",
    expiresAt: "2026-05-29",
  },
  websiteData = {
    website: domain,
    redirectingFrom: [`www.${domain}`, `m.${domain}`],
    title: "Send Personalised Cards Online | Card Delivery | Cardly",
    description:
      "Personalize a handwritten card and have it posted the same day. Free shipping within the UK, US, Australia, Canada & EU.",
    audience: ["Online shoppers", "Gift senders", "Last-minute buyers"],
    regions: ["UK", "US", "Australia", "Canada", "EU"],
    websiteSpeed: "Fast",
    ssl: "DV SSL",
    sslIssuer: "Let’s Encrypt",
    techStack: ["Cloudflare", "Nginx", "Next.js", "React"],
    registrar: "NameCheap, Inc.",
    whoisCreatedAt: "2014-05-29",
  },
  className = "",
}: Props) {
  return (
    <section
      className={`${className}`}
      aria-labelledby="facts-accordion-heading"
    >
      <h2 id="facts-accordion-heading" className="sr-only">
        Technical facts and data about {domain}
      </h2>

      <div className="rounded-md border border-neutral-200 bg-white shadow-sm">
        <div className="p-5">
          <p className="text-lg font-extrabold text-neutral-900">
            Facts about <span className="text-emerald-600">{domain}</span>
          </p>
        </div>

        <div className="divide-y divide-neutral-200">
          {/* Alexa rank */}
          <Details title="Alexa rank">
            <p className="text-[15px] leading-7 text-neutral-700">
              Estimated global popularity index (lower is better).
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Current snapshot:{" "}
              <span className="font-semibold text-neutral-800">
                {new Intl.NumberFormat().format(alexaRank)}
              </span>
              .
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              How rank relates to trust signals?{" "}
              <Link
                href="/help"
                className="font-semibold underline underline-offset-2 hover:text-neutral-900"
              >
                Read our guide
              </Link>
              .
            </p>
          </Details>

          {/* Backlinks */}
          <Details title="Backlinks">
            <p className="text-[15px] leading-7 text-neutral-700">
              Referring links from other sites can indicate reputation if
              they’re natural and from high-quality sources.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Detected backlinks:{" "}
              <span className="font-semibold text-neutral-800">
                {new Intl.NumberFormat().format(backlinks)}
              </span>
              .
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700">
              <li>Favor links from relevant, trustworthy domains.</li>
              <li>A sudden spike of spammy links can be a red flag.</li>
            </ul>
          </Details>

          {/* Domain age */}
          <Details title="Domain age">
            <p className="text-[15px] leading-7 text-neutral-700">
              Older domains can be a positive signal, but age alone is not proof
              of legitimacy.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Registered approximately{" "}
              <span className="font-semibold text-neutral-800">
                {domainAgeYears} years
              </span>{" "}
              ago (see WHOIS dates below).
            </p>
          </Details>

          {/* WHOIS */}
          <Details title="WHOIS data">
            <dl className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              <Row
                term="Registrant country"
                value={whois.registrantCountry ?? "—"}
              />
              <Row
                term="Status"
                value={(whois.status ?? []).join(", ") || "—"}
              />
              <Row
                term="Name servers"
                value={(whois.nameServers ?? []).join(", ") || "—"}
              />
              <Row term="Created at" value={whois.createdAt ?? "—"} />
              <Row term="Updated at" value={whois.updatedAt ?? "—"} />
              <Row term="Expires at" value={whois.expiresAt ?? "—"} />
            </dl>
            <p className="mt-3 text-xs text-neutral-500">
              Privacy services often mask registrant details; that alone is not
              conclusive.
            </p>
          </Details>

          {/* Website data */}
          <Details title="Website data" emphasis>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
              <Row term="Website" value={websiteData.website ?? domain} />
              <Row
                term="Redirecting from"
                value={(websiteData.redirectingFrom ?? []).join(", ") || "—"}
              />
              <Row term="Title" value={websiteData.title ?? "—"} />
              <Row term="Speed" value={websiteData.websiteSpeed ?? "—"} />
              <Row term="SSL" value={websiteData.ssl ?? "—"} />
              <Row term="SSL issuer" value={websiteData.sslIssuer ?? "—"} />
              <Row term="Registrar" value={websiteData.registrar ?? "—"} />
              <Row
                term="WHOIS registration date"
                value={websiteData.whoisCreatedAt ?? "—"}
              />
              <Row
                term="Regions"
                value={(websiteData.regions ?? []).join(", ") || "—"}
              />
              <Row
                term="Audience"
                value={(websiteData.audience ?? []).join(", ") || "—"}
              />
              <Row
                term="Tech stack"
                value={(websiteData.techStack ?? []).join(", ") || "—"}
              />
            </dl>

            <div className="mt-4 space-y-2">
              <p className="text-[15px] leading-7 text-neutral-700">
                <span className="font-semibold">Description: </span>
                {websiteData.description ?? "—"}
              </p>
              <p className="text-xs text-neutral-500">
                Always verify contact details and return policies before
                purchase.
              </p>
            </div>
          </Details>
        </div>
      </div>
    </section>
  );
}

/* ---------- subcomponents (server-safe) ---------- */

function Details({
  title,
  children,
  emphasis = false,
}: {
  title: string;
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <details className="group">
      <summary
        className={[
          "flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-bold tracking-wide",
          "bg-neutral-100 text-neutral-800 list-none", // closed look
          "open:bg-red-600 open:text-white", // open look (no JS)
        ].join(" ")}
      >
        <span>{title}</span>
        {/* caret */}
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

      <div
        className={["px-4 py-4", emphasis ? "bg-neutral-50" : "bg-white"].join(
          " "
        )}
      >
        {children}
      </div>
    </details>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="min-w-44 shrink-0 text-neutral-500">{term}</dt>
      <dd className="font-medium text-neutral-800">{value}</dd>
    </div>
  );
}
