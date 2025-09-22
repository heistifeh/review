// app/blog/[slug]/page.tsx
import { blogs } from "@/data/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogs.filter((b) => b.slug).map((b) => ({ slug: b.slug! }));
}

// (optional) Per-post metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Post not found | ScamRatings" };

  const site =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scamratings.com";
  const url = `${site}/blog/${slug}`;

  return {
    title: `${blog.title} | ScamRatings`,
    description: blog.excerpt ?? "Gift card safety and scam awareness.",
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "ScamRatings",
      title: blog.title,
      description: blog.excerpt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <article>
        <h1 className="text-3xl font-bold text-neutral-900">{blog.title}</h1>
        {blog.excerpt && (
          <p className="mt-4 text-neutral-700 leading-7">{blog.excerpt}</p>
        )}

        <div className="mt-8 space-y-4 text-neutral-700">
          <p>
            In this article we answer a popular search:{" "}
            <strong>“Is GiftlyCard.com legit or fake?”</strong> We analyze
            domain data, SSL certificates, customer reviews, and safety signals
            to help you make an informed decision.
          </p>
          <p>
            Many shoppers are concerned about <em>gift card scams in 2025</em>.
            Our review shows how to identify red flags, compare trust signals,
            and safely buy gift cards online.
          </p>
        </div>
      </article>
    </main>
  );
}
