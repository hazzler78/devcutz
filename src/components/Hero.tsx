import Image from "next/image";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

/** Stor hero med bild, rubriker och tydliga CTA:s. */
export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0">
        <Image
          src={site.hero.imageSrc}
          alt={site.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/70 to-[#0f0f0f]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/95 via-[#0f0f0f]/55 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:justify-center md:pb-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
          Frisör & barber · Arvika · Noiz
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          {site.hero.headline}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80 sm:text-xl">
          {site.hero.sub}
        </p>

        <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href={site.bookNoiz.url} target="_blank" rel="noopener noreferrer">
            {site.bookNoiz.cta}
          </Button>
          <Button href="#galleri" variant="ghost">
            {site.hero.ctaGallery}
          </Button>
          <Button href="#priser" variant="outline">
            {site.hero.ctaPrices}
          </Button>
        </div>

        <p className="mt-6 max-w-xl text-sm text-white/55">{site.bookNoiz.heroNote}</p>
      </div>
    </section>
  );
}
