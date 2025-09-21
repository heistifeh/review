// app/components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Item = {
  label: string;
  href: string;
  ariaLabel?: string;
};

const NAV_ITEMS: Item[] = [
  { label: "Report a scam", href: "/help", ariaLabel: "Report a scam" },
  { label: "Blog", href: "/blog", ariaLabel: "Blog" },
  { label: "Help", href: "/help", ariaLabel: "Help" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition
        hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${
          isActive
            ? "text-black dark:text-white"
            : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
        }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click / escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClick);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-neutral-900 dark:text-white"
          aria-label="SCAMRATINGS home"
        >
          <span className="sr-only">SCAMRATINGS</span>
          <span aria-hidden className="select-none">
            SCAM<span className="text-red-600">RATINGS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}

          {/* “Report a scam” emphasized */}
          <Link
            href={NAV_ITEMS[0].href}
            aria-label={NAV_ITEMS[0].ariaLabel}
            className="ml-2 inline-flex items-center rounded-xl border border-emerald-600 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
          >
            {NAV_ITEMS[0].label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex items-center rounded-lg p-2 text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 md:hidden dark:text-neutral-200 dark:hover:bg-neutral-800"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        ref={panelRef}
        className={`md:hidden transition-[max-height] duration-300 ease-out overflow-hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-4 pt-1 sm:px-6 lg:px-8">
          {/* Emphasized primary action first on mobile */}
          <Link
            href={NAV_ITEMS[0].href}
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-xl border border-emerald-600 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
          >
            {NAV_ITEMS[0].label}
          </Link>
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
              aria-label={item.ariaLabel}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
