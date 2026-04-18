import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

/**
 * Instagram-feed via tredjeparts-widget (LightWidget, EmbedSocial, Elfsight m.m.).
 *
 * Sätt `NEXT_PUBLIC_INSTAGRAM_WIDGET_URL` i `.env.local` (lokalt) och i Vercel → Environment Variables (prod).
 * Värdet ska vara **själva iframe-URL:en** som börjar med `https://` (t.ex. från LightWidget).
 */
function normalizeWidgetUrl(raw: string | undefined): string | null {
  if (!raw) return null;
  const url = raw.trim();
  if (!url) return null;
  if (!/^https:\/\//i.test(url)) return null;
  return url;
}

export function InstagramFeed() {
  const rawEnv = process.env.NEXT_PUBLIC_INSTAGRAM_WIDGET_URL;
  const widgetUrl = normalizeWidgetUrl(rawEnv);
  const invalidUrl = Boolean(rawEnv?.trim() && !widgetUrl);
  const ig = site.instagram;

  return (
    <section
      id="galleri"
      className="scroll-mt-24 border-t border-white/10 bg-[#0f0f0f] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {site.gallery.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-white/65">{site.gallery.intro}</p>
            <p className="mt-2 text-sm text-white/45">
              Senaste från @{ig.handle} kan visas automatiskt här via en widget – så slipper du ladda upp
              varje bild manuellt på hemsidan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={ig.url} target="_blank" rel="noopener noreferrer">
              Öppna Instagram
            </Button>
            <Button href={site.tiktok.url} target="_blank" rel="noopener noreferrer" variant="ghost">
              TikTok @{site.tiktok.handle}
            </Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-[0_0_60px_rgba(0,255,157,0.06)]">
          {widgetUrl ? (
            <div className="relative w-full">
              {/*
                block + border-0: undvik glapp under iframe (inline-element).
                Min-höjd: widget-leverantörer ritar ofta fast höjd – ge yta så inget klipps konstigt.
              */}
              <iframe
                title={`Instagram-flöde från @${ig.handle}`}
                src={widgetUrl}
                className="block min-h-[560px] w-full border-0 sm:min-h-[640px] lg:min-h-[680px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : invalidUrl ? (
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center sm:py-20">
              <p className="max-w-lg text-lg text-amber-200/90">
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-accent">
                  NEXT_PUBLIC_INSTAGRAM_WIDGET_URL
                </code>{" "}
                är satt men verkar ogiltig. Den ska vara en fullständig länch som börjar med{" "}
                <strong className="text-white">https://</strong> (iframe-URL från t.ex. LightWidget).
              </p>
              <Button href={ig.url} target="_blank" rel="noopener noreferrer">
                Öppna @{ig.handle} under tiden
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center sm:py-20">
              <p className="max-w-lg text-lg text-white/80">
                Koppla en <strong className="text-white">Instagram-widget</strong> (t.ex.{" "}
                <a
                  href="https://lightwidget.com"
                  className="text-accent underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LightWidget
                </a>
                ) så rullar dina senaste inlägg in här automatiskt när du postar på @{ig.handle}.
              </p>
              <ol className="max-w-md list-decimal space-y-2 pl-5 text-left text-sm text-white/55">
                <li>Skapa widget och kopiera <strong className="text-white/80">iframe-src</strong> (https://…).</li>
                <li>
                  Lägg den i <code className="rounded bg-white/10 px-1.5 py-0.5">.env.local</code> som{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-accent">
                    NEXT_PUBLIC_INSTAGRAM_WIDGET_URL
                  </code>
                  .
                </li>
                <li>Starta om dev-servern. På Vercel: lägg samma variabel under Environment Variables och redeploy.</li>
              </ol>
              <Button href={ig.url} target="_blank" rel="noopener noreferrer">
                Kolla @{ig.handle} nu
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
