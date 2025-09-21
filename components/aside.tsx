// app/components/facts/Aside.tsx
import Link from "next/link";

type BlogItem = { title: string; href: string }; // href can be internal or external
type StoryItem = { title: string; excerpt: string; href: string };

type HelpItem = { title: string; href: string };

type Props = {
  blogs: BlogItem[];
  stories: StoryItem[];
  helps?: HelpItem[]; // optional; if not passed, we default to your /help slugs
};

export default function Aside({ blogs, stories, helps }: Props) {
  const helpLinks: HelpItem[] = helps ?? [
    { title: "Is this website legit?", href: "/help/is-this-website-legit" },
    { title: "Safe payment methods", href: "/help/safe-payment-methods" },
    { title: "Get your money back", href: "/help/get-your-money-back" },
  ];

  return (
    <div className="space-y-6">
      {/* Related blogs */}
      <section
        aria-labelledby="related-blogs-heading"
        className="rounded-md border border-neutral-200 bg-white shadow-sm"
      >
        <div className="p-5">
          <h2
            id="related-blogs-heading"
            className="text-xl font-extrabold text-neutral-900"
          >
            Related blogs
          </h2>

          <ul className="mt-4 space-y-3">
            {blogs.map((b) => (
              <li key={b.href}>
                {isExternal(b.href) ? (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[15px] font-semibold leading-6 text-neutral-800 hover:underline"
                  >
                    {b.title}
                  </a>
                ) : (
                  <Link
                    href={b.href}
                    className="text-[15px] font-semibold leading-6 text-neutral-800 hover:underline"
                  >
                    {b.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Link
              href="/blog"
              className="flex w-full items-center justify-center bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Help & Guides */}
      <section
        aria-labelledby="help-guides-heading"
        className="rounded-md border border-neutral-200 bg-white shadow-sm"
      >
        <div className="p-5">
          <h2
            id="help-guides-heading"
            className="text-xl font-extrabold text-neutral-900"
          >
            Help &amp; Guides
          </h2>
          <ul className="mt-4 space-y-3">
            {helpLinks.map((h) => (
              <li key={h.href}>
                <Link
                  href={h.href}
                  className="text-[15px] font-semibold leading-6 text-emerald-700 hover:text-red-600 hover:underline"
                >
                  {h.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popular Stories (unchanged API) */}
      <section
        aria-labelledby="popular-stories-heading"
        className="rounded-md border border-neutral-200 bg-white shadow-sm"
      >
        <div className="p-5">
          <h2
            id="popular-stories-heading"
            className="text-xl font-extrabold text-neutral-900"
          >
            Popular Stories
          </h2>

          <ul className="mt-4 space-y-5">
            {stories.map((s) => (
              <li
                key={s.href}
                className="rounded-md border border-neutral-100 bg-white p-4 shadow-sm"
              >
                <Link
                  href={s.href}
                  className="text-lg font-extrabold text-red-600 hover:underline"
                >
                  {s.title}
                </Link>
                <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                  {s.excerpt}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */
function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
