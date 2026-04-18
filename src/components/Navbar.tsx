"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#om", label: "Om Devin" },
  { href: "#media", label: "Bilder & film" },
  { href: "#galleri", label: "Instagram" },
  { href: "#priser", label: "Priser" },
  { href: "#boka", label: "Boka" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-white/10 bg-[#0f0f0f]/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent">{site.brand}</span>
          <span className="text-white/60">.se</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Huvudmeny">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-2.5 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white xl:px-3"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.bookNoiz.url} target="_blank" rel="noopener noreferrer">
            {site.bookNoiz.ctaShort}
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Stäng" : "Meny"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-b border-white/10 bg-[#0f0f0f]/95 px-4 pb-4 backdrop-blur-md lg:hidden"
        >
          <div className="flex flex-col gap-1 pt-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-3 text-base text-white/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button
              href={site.bookNoiz.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {site.bookNoiz.ctaShort}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
