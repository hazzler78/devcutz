import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 border-t border-white/10 bg-[#111111] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {site.contact.title}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-white/65">
          Hitta till {site.workplace.name} på {site.workplace.addressSingleLine} – taper fade,
          herrfrisör och skäggtrim i centrala Arvika.
        </p>

        {/*
          items-start: annars sträcker grid ut höger kolumn till vänster kolumns höjd,
          och ytan under iframen blir tom (svart bakgrund i kortet).
        */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/45">
                Adress
              </h3>
              <p className="mt-3 text-lg font-semibold text-white">{site.workplace.addressSingleLine}</p>
              <p className="mt-1 text-sm text-white/55">
                Samma hus som{" "}
                <a
                  href={site.workplace.website}
                  className="text-accent underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.workplace.legalName}
                </a>{" "}
                – växel salongen:{" "}
                <a className="text-white hover:underline" href={`tel:${site.workplace.salonPhoneTel}`}>
                  {site.workplace.salonPhoneDisplay}
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/45">
                Kontakt
              </h3>
              <p className="mt-3 text-lg text-white">{site.contact.dmLine}</p>
              <p className="mt-2 text-sm text-white/55">{site.contact.phoneNote}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram DM
                </Button>
                <Button href={`tel:${site.phoneTel}`} variant="ghost">
                  Ring {site.phone}
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/45">
                {site.hours.title}
              </h3>
              <ul className="mt-4 space-y-2 text-white/80">
                {site.hours.lines.map((row) => (
                  <li key={row.day} className="flex justify-between gap-4 border-b border-white/5 py-2 last:border-0">
                    <span>{row.day}</span>
                    <span className="font-medium text-white">{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/45">
                Tiderna gäller när jag är på plats som lärling – dubbellkolla gärna i DM om du är
                osäker.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.45)]">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-sm font-semibold text-white">{site.workplace.name}</p>
              <p className="text-sm text-white/55">{site.workplace.addressSingleLine}</p>
            </div>
            <div className="relative aspect-[4/3] w-full sm:aspect-video">
              <iframe
                title={`Karta till ${site.workplace.name}, ${site.workplace.addressSingleLine}`}
                src={site.mapsEmbedSrc}
                className="absolute inset-0 block h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
