import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Booking() {
  return (
    <section
      id="boka"
      className="scroll-mt-24 border-t border-accent/25 bg-[#0c0c0c] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {site.booking.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">{site.booking.body}</p>
            <p className="mt-4 text-sm text-white/50">{site.booking.supportBody}</p>
            <div className="mt-8">
              <Button href={site.bookNoiz.url} target="_blank" rel="noopener noreferrer">
                {site.booking.cta}
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8">
            <h3 className="text-lg font-bold text-white">{site.booking.sideTitle}</h3>
            <ul className="mt-4 space-y-3 text-white/70">
              {site.booking.points.map((text) => (
                <li key={text} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/45">
              {site.booking.phoneNote}{" "}
              <a className="text-accent hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
