import Aside from "./aside";
import Fact from "./fact";
import FactDetails from "./factsDetails";

type BlogItem = { title: string; href: string };
type StoryItem = { title: string; excerpt: string; href: string };

type Props = {
  domain: string;
  blogs: BlogItem[];
  stories: StoryItem[];
};

export default function FactHome({ domain}: Props) {
  return (
    <section id="detailed-analysis" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main (2/3) */}
        <div className="lg:col-span-2">
          <Fact domain={domain} />
          <FactDetails domain={domain} />
        </div>

        {/* Sidebar (1/3) */}
        <aside className="lg:col-span-1">
          <Aside
            blogs={[
              {
                title:
                  "GiftlyCard.com Recognized as Verified and Secure by Independent Review Sites",
                href: "https://chainwire.org/2025/09/03/giftlycard-com-recognized-as-verified-and-secure-by-independent-review-sites/?mfk=Zvtobc7cSRvdsg3O5cIE5y2jHwrtpkLKYW6%2FVKd%2FKshZ0u0TprCBN%2ByGyZfPEkPcDXfKQole24ytXo040JkgzqW5GLRfH2B4yslMAIBolcNH",
              },
              {
                title:
                  "Independent Analysts Report Growing Trust in Online Gift Card Platforms Offering Cryptocurrency",
                href: "https://www.prlog.org/13095118-independent-analysts-report-growing-trust-in-online-gift-card-platforms-offering-cryptocurrency.html",
              },
              {
                title: "How to Protect Yourself from Gift Card Scams in 2025",
                href: "https://medium.com/@giftlycardinfo/how-to-protect-yourself-from-gift-card-scams-in-2025-82a0df2a21fe",
              },
              {
                title:
                  "GiftlyCard Partners with Global Retailers for Safer Online Shopping",
                href: "https://www.pr.com/press-release/946420",
              },
              // Internal blog slugs (no external link)
              {
                title: "Is GiftlyCard.com Legit or a Scam? A Detailed Review",
                href: "/blog/is-giftlycard-legit-or-scam",
              },
              {
                title: "Top 5 Tips for Buying Gift Cards Online Safely",
                href: "/blog/safe-gift-card-buying-tips",
              },
            ]}
            stories={[
              {
                title: "How to Recognize a Scam Website",
                excerpt:
                  "Simple checks to decide if an online store is safe: domain age, SSL, reviews, and buyer protection.",
                href: "/help/is-this-website-legit",
              },
              {
                title: "Safe Payment Methods for First-Time Sellers",
                excerpt:
                  "Why cards with chargebacks are safer than bank transfers or crypto when you’re unsure.",
                href: "/help/safe-payment-methods",
              },
            ]}
          />
        </aside>
      </div>
    </section>
  );
}
