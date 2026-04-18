import Link from "next/link";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xl font-bold tracking-tight text-white">
            <span className="text-accent">{site.brand}</span>
            <span className="text-white/50">.se</span>
          </p>
          <p className="mt-2 max-w-md text-sm text-white/55">
            {site.person.name} · {site.person.age} år · lärling på{" "}
            <a
              href={site.workplace.website}
              className="text-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.workplace.name}
            </a>{" "}
            i {site.workplace.city}. Taper fade, herrfrisör, barnklippning och skäggtrim. Boka via Noiz.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={site.bookNoiz.url} target="_blank" rel="noopener noreferrer">
            {site.bookNoiz.ctaShort}
          </Button>
          <Button href={site.instagram.url} target="_blank" rel="noopener noreferrer" variant="ghost">
            Följ @{site.instagram.handle}
          </Button>
          <Button href={site.tiktok.url} target="_blank" rel="noopener noreferrer" variant="ghost">
            TikTok @{site.tiktok.handle}
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.brand} · {site.person.name} · {site.workplace.city}, Sverige
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="#top" className="hover:text-white">
            Till toppen
          </Link>
          <a href={site.bookNoiz.url} className="hover:text-white" target="_blank" rel="noreferrer">
            Boka Noiz
          </a>
          <a href={site.instagram.url} className="hover:text-white" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={site.tiktok.url} className="hover:text-white" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </p>
      </div>
    </footer>
  );
}
