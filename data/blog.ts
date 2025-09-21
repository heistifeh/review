// app/data/blogs.ts
export type Blog = {
  title: string;
  slug?: string;
  excerpt: string;
  sourceUrl?: string;
};

export const blogs: Blog[] = [
  {
    title: "GiftlyCard.com Recognized as Verified and Secure by Independent Review Sites",
    sourceUrl:
      "https://chainwire.org/2025/09/03/giftlycard-com-recognized-as-verified-and-secure-by-independent-review-sites/?mfk=Zvtobc7cSRvdsg3O5cIE5y2jHwrtpkLKYW6%2FVKd%2FKshZ0u0TprCBN%2ByGyZfPEkPcDXfKQole24ytXo040JkgzqW5GLRfH2B4yslMAIBolcNH",
    excerpt:
      "Independent analysts confirm that GiftlyCard.com is a trusted platform for buying gift cards online, addressing the popular question: is GiftlyCard legit or fake?",
  },
  {
    title: "Independent Analysts Report Growing Trust in Online Gift Card Platforms Offering Cryptocurrency",
    sourceUrl:
      "https://www.prlog.org/13095118-independent-analysts-report-growing-trust-in-online-gift-card-platforms-offering-cryptocurrency.html",
    excerpt:
      "Analyst report shows rising confidence in online gift card platforms. Learn what to watch for when asking, 'Is this gift card site safe?'",
  },
  {
    title: "How to Protect Yourself from Gift Card Scams in 2025",
    sourceUrl:
      "https://medium.com/@giftlycardinfo/how-to-protect-yourself-from-gift-card-scams-in-2025-82a0df2a21fe",
    excerpt:
      "From fake e-commerce websites to phishing, discover the latest online gift card scams in 2025 and how to stay safe.",
  },
  {
    title: "GiftlyCard Partners with Global Retailers for Safer Online Shopping",
    sourceUrl: "https://www.pr.com/press-release/946420",
    excerpt:
      "GiftlyCard announces partnerships with trusted global retailers, reinforcing its legitimacy in the competitive online gift card market.",
  },
  // Internal blogs (no external links, have slugs)
  {
    title: "Is GiftlyCard.com Legit or a Scam? A Detailed Review",
    slug: "is-giftlycard-legit-or-scam",
    excerpt:
      "We investigate whether GiftlyCard.com is a legit platform or a scam. Includes user reviews, safety checks, and expert analysis.",
  },
  {
    title: "Top 5 Tips for Buying Gift Cards Online Safely",
    slug: "safe-gift-card-buying-tips",
    excerpt:
      "Worried about getting scammed when buying gift cards online? Here are five essential tips to ensure your purchase is secure.",
  },
  {
    title: "The Rise of Cryptocurrency Gift Cards in 2025",
    slug: "crypto-gift-cards-2025",
    excerpt:
      "Cryptocurrency-backed gift cards are becoming mainstream. We explore why people are searching for secure ways to buy gift cards with crypto.",
  },
];
