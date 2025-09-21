// app/blog/page.tsx
import { blogs } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Gift Card Safety & Reviews Blog | ScamRatings",
  description:
    "Expert insights and reviews on buying gift cards online. Learn if sites like GiftlyCard.com are legit or fake, plus safe shopping tips.",
  keywords: [
    "is giftlycard legit",
    "is giftlycard fake",
    "gift card scam 2025",
    "buy gift cards online reviews",
    "safe gift card websites",
  ],
};

export default function BlogIndex() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-neutral-900">
        Gift Card Safety & Reviews Blog
      </h1>
      <p className="mt-3 max-w-3xl text-neutral-700">
        Stay informed with the latest guides, safety checks, and news about
        online gift cards. Discover whether platforms like{" "}
        <strong className="text-emerald-600">GiftlyCard.com</strong> are safe,
        legit, or scams.
      </p>

      {/* Grid of blog cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog.slug ?? blog.sourceUrl}
            className="group flex flex-col justify-between rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="p-5">
              <h2 className="text-lg font-bold text-neutral-900 group-hover:text-red-600">
                {blog.slug ? (
                  <Link href={`/blog/${blog.slug}`} className="hover:underline">
                    {blog.title}
                  </Link>
                ) : (
                  <a
                    href={blog.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {blog.title}
                  </a>
                )}
              </h2>
              <p className="mt-3 text-sm text-neutral-700 leading-6">
                {blog.excerpt}
              </p>
            </div>
            <div className="px-5 pb-5">
              {blog.slug ? (
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block text-sm font-semibold text-emerald-600 hover:text-red-600"
                >
                  Read More →
                </Link>
              ) : (
                <a
                  href={blog.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-emerald-600 hover:text-red-600"
                >
                  Read More →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
