import HelpContact from "./parts/helpContact";
import HelpFAQ from "./parts/helpFAQ";
import HelpHero from "./parts/helpHero";
import HelpQuickLinks from "./parts/helpQuickLinks";
import HelpSafetyTips from "./parts/helpSafetyTips";

export const metadata = {
  title: "Help Center | ScamRatings",
  description:
    "Get help spotting scam websites, learn safe payment methods, and see what to do if you’ve been scammed. Report a scam or explore our guides.",
  keywords: [
    "help with scams",
    "report a scam",
    "is this website legit",
    "gift card scam help",
    "is giftlycard.com legit or fake",
    "safe payment methods online",
  ],
};

export default function HelpPage() {
  // JSON-LD FAQ (rich results)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know if a website is legit or a scam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check domain age, SSL, company details, reviews on independent sites, and whether buyer-friendly payment methods are offered. Avoid bank transfers or crypto if you’re unsure.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I already paid a scam website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact your bank or card issuer immediately and file a dispute. If you paid with a gift card, contact the gift card company. Collect evidence like receipts, emails, and URLs.",
        },
      },
      {
        "@type": "Question",
        name: "Are gift-card deals for 40–60% off legit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deep-discount gift cards are a common scam. Verify the seller, read recent reviews, and only buy through platforms that provide buyer protection and chargeback options.",
        },
      },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>Home</li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-neutral-800">Help</li>
        </ol>
      </nav>

      <HelpHero />
      <HelpQuickLinks className="mt-8" />
      <HelpFAQ className="mt-8" />
      <HelpSafetyTips className="mt-8" />
      <HelpContact className="mt-8" />
    </main>
  );
}
