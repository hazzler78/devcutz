import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Prices() {
  return (
    <section
      id="priser"
      className="scroll-mt-24 border-t border-white/10 bg-[#111111] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {site.prices.title}
          </h2>
          <p className="mt-3 text-base text-white/65">
            Enkla priser för klippning Arvika, herrfrisör och skäggtrim. Inga gömda grejer.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.prices.items.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
            >
              <span className="text-base font-medium text-white/90">{item.label}</span>
              <span className="shrink-0 text-lg font-bold text-accent">{item.price}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href={site.instagram.url} target="_blank" rel="noopener noreferrer">
            Boka via DM – säg vad du vill ha
          </Button>
          <Button href="#boka" variant="outline">
            Läs om bokning
          </Button>
        </div>
      </div>
    </section>
  );
}
