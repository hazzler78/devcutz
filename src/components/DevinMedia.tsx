import Image from "next/image";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

/**
 * Visar Devins uppladdade bilder + videor från `public/`.
 * Nya filer: uppdatera listorna i `src/config/site.ts` → `media.photos` / `media.clips`.
 */
export function DevinMedia() {
  return (
    <section
      id="media"
      className="scroll-mt-24 border-t border-white/10 bg-[#111111] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {site.media.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-white/65">{site.media.intro}</p>
            <p className="mt-2 text-sm text-white/45">
              {site.workplace.name} · {site.workplace.addressSingleLine}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={site.tiktok.url} target="_blank" rel="noopener noreferrer" variant="ghost">
              Mer på TikTok
            </Button>
            <Button href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              Följ på Instagram
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.media.photos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]"
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </div>

        <h3 className="mt-14 text-lg font-bold text-white sm:text-xl">Videos – swipe på mobilen</h3>
        <p className="mt-2 text-sm text-white/55">
          Tryck play när du vill – inget autospel så sidan håller sig snabb.
        </p>

        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {site.media.clips.map((clip) => (
            <div
              key={clip.src}
              className="w-[min(100%,320px)] shrink-0 snap-center sm:w-[360px]"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_0_40px_rgba(0,255,157,0.06)]">
                <video
                  className="aspect-[9/16] w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${site.person.name} – ${clip.label}, klippning och barber i Arvika`}
                >
                  <source src={clip.src} type="video/mp4" />
                  Din webbläsare klarar inte video – öppna{" "}
                  <a href={site.instagram.url} className="text-accent underline">
                    Instagram
                  </a>{" "}
                  istället.
                </video>
              </div>
              <p className="mt-2 text-center text-xs font-medium text-white/50">
                {clip.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
