// app/components/facts/Fact.tsx
"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type Props = { domain: string };

export default function Fact({ domain }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-6">
      {/* Full review card */}
      <article className="rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
          Full review{" "}
          <span className="text-emerald-600">{domain}</span>
        </h2>

        <section className="mt-4">
          <h3 className="text-lg font-extrabold text-neutral-800">
            Webshop Analysis
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            This website has been set up several years ago. We consider this a positive sign.
            The longer a website exists, the more it can be expected that it is legit.
            However, age is no guarantee. In some cases, scammers buy existing domain names and
            start malicious practices there, so checking a website remains a necessity.
          </p>
        </section>

        <section className="mt-5">
          <h3 className="text-lg font-extrabold text-neutral-800">
            Technical Analysis
          </h3>
          <div className="mt-2 space-y-4 text-[15px] leading-7 text-neutral-700">
            <p>
              We identified payment methods such as Alipay, Mastercard, PayPal, and Visa that
              offer options to get money back if a product is not delivered or a dispute arises.
              Each method has its own restrictions; always pay with a method you trust. For more, read{" "}
              <Link
                href="/safe-payment-methods"
                className="font-semibold underline underline-offset-2 hover:text-neutral-900"
              >
                “Safe Payment Methods”
              </Link>
              .
            </p>
            <p>
              A valid SSL certificate was found. Professional companies use SSL to encrypt communication.
              Different levels of certification exist, and scammers can install basic SSL too. Never enter
              data without checking whether SSL properly protects your information.
            </p>
          </div>
        </section>
      </article>

      {/* Facts card with red bar */}
      <section aria-labelledby="facts-heading" className="rounded-md border border-neutral-200 bg-white shadow-sm">
        <h2 id="facts-heading" className="sr-only">
          Facts about {domain}
        </h2>

        <div className="p-5">
          <h3 className="text-xl font-extrabold text-neutral-900">
            Facts about <span className="text-emerald-600">{domain}</span>
          </h3>
        </div>

        {/* Red collapsible header */}
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="flex w-full items-center justify-between bg-red-600 px-4 py-3 text-left text-sm font-bold tracking-wide text-white"
          aria-expanded={open}
        >
          <span>Key facts</span>
          {open ? (
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        {open && (
          <div className="px-5 pb-5 pt-4 text-[15px] leading-7 text-neutral-700">
            <ul className="list-disc space-y-2 pl-5">
              <li>Website age indicates long-term presence.</li>
              <li>SSL certificate detected on primary domain.</li>
              <li>Multiple buyer-friendly payment methods available.</li>
              <li>External signals suggest generally positive feedback.</li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
