import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section
      id="om"
      className="scroll-mt-24 border-t border-white/10 bg-[#111111] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {site.about.title}
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-accent">
              Herrfrisör Arvika · taper fade · lärling på Noiz
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              {site.about.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                DM:a mig på @{site.instagram.handle}
              </Button>
              <Button href="#priser" variant="ghost">
                Se priser
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 shadow-[0_0_0_1px_rgba(0,255,157,0.08)]">
            <dl className="grid gap-6 text-sm sm:text-base">
              <div>
                <dt className="text-white/45">Namn</dt>
                <dd className="mt-1 font-semibold text-white">{site.person.name}</dd>
              </div>
              <div>
                <dt className="text-white/45">Ålder / roll</dt>
                <dd className="mt-1 font-semibold text-white">
                  {site.person.age} år · {site.person.jobTitle}
                </dd>
              </div>
              <div>
                <dt className="text-white/45">Salong</dt>
                <dd className="mt-1 font-semibold text-white">{site.workplace.name}</dd>
              </div>
              <div>
                <dt className="text-white/45">Adress</dt>
                <dd className="mt-1 font-semibold text-white">{site.workplace.addressSingleLine}</dd>
              </div>
              <div>
                <dt className="text-white/45">Område</dt>
                <dd className="mt-1 font-semibold text-white">
                  {site.workplace.city} & runt omkring – klippning, fade, skäggtrim
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
