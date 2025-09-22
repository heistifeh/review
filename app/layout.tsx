// app/layout.tsx (RootLayout)
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scamratings.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ScamRatings — Verified Reviews & Scam Checks on GiftlyCard.com",
    template: "%s | ScamRatings",
  },
  description:
    "Independent reviews and safety checks for online stores and gift card platforms like GiftlyCard.com. Find out if a website is legit or a scam before you buy.",
  keywords: [
    "is giftlycard legit",
    "giftlycard fake or scam",
    "scam ratings website",
    "website scam check",
    "gift card scam 2025",
    "safe gift card websites",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ScamRatings",
    title: "ScamRatings — Check If a Website Is Legit or Scam",
    description:
      "Expert reviews and safety checks for websites like GiftlyCard.com. Learn how to spot scams, check domain data, and shop online safely.",
    images: [
      {
        url: `${SITE_URL}/og/scamratings-og.jpg`, // add to /public/og/
        width: 1200,
        height: 630,
        alt: "ScamRatings — Independent Reviews & Scam Checks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ScamRatings", // update if you have a handle
    creator: "@ScamRatings",
    title: "ScamRatings — Check If a Website Is Legit or Scam",
    description:
      "Independent safety reviews for websites like GiftlyCard.com. Is it legit or a scam? Find out before you buy.",
    images: [`${SITE_URL}/og/scamratings-og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
