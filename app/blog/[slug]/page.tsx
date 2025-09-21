// app/blog/[slug]/page.tsx
import { blogs } from "@/data/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogs.filter((b) => b.slug).map((b) => ({ slug: b.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <article>
        <h1 className="text-3xl font-bold text-neutral-900">{blog.title}</h1>
        <p className="mt-4 text-neutral-700 leading-7">{blog.excerpt}</p>

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
