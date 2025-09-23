import Banner from "@/components/banner";
import FactHome from "@/components/factsHome";
import Highlights from "@/components/highlights";
import SiteSafetySection from "@/components/safetly";

export default function Home() {
  return (
    <div>
      <Banner domain="GiftlyCard.com" visitHref="https://GiftlyCard.com" />
      <SiteSafetySection domain="GiftlyCard.com" trustScore={100} />
      <Highlights
        domain="GiftlyCard.com"
        positives={[
          {
            text: 'This website offers "get your money back" [link]friendly payment methods[/link]',
            href: "/blog",
          },
          {
            text: "The website seems to be an online store ([link]tips for checking shopping scam[/link])",
            href: "/help",
          },
          { text: "This website has received positive reviews" },
          { text: "The SSL certificate is valid" },
          { text: "This website is (very) old" },
          {
            text: "This website is safe according to [link]DNSFilter[/link]",
            href: "https://dnsfilter.com",
          },
        ]}
        negatives={[]}
        detailedAnalysisHref="#detailed-analysis"
        visitHref="https://giftlycard.com"
      />
      <FactHome
        domain="giftlycard.com"
        blogs={[
          { title: "Is Sellbra.com Safe or a Scam?", href: "/blog/sellbra" },
          {
            title: "Is AirJordanOfficial.us.com Safe or a Scam?",
            href: "/blog/airjordanofficial",
          },
          {
            title: "Is Noblu-glasses.com Legit or a Scam? Here’s What We Found",
            href: "/blog/noblu-glasses",
          },
          {
            title: "Is Tupperware-us.com a Scam or Legit?",
            href: "/blog/tupperware-us",
          },
          {
            title: "Goodteacherlife.com Review: Is it Fake or Real?",
            href: "/blog/goodteacherlife",
          },
        ]}
        stories={[
          {
            title: "How to Recognize a Scam Website",
            excerpt:
              "As the influence of the internet rises, so does the prevalence of online scams. Learn key patterns to spot fake stores, investment traps, and phishing pages.",
            href: "/stories/recognize-scam-website",
          },
        ]}
      />
    </div>
  );
}
