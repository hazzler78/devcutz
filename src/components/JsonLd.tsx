import { site } from "@/config/site";

/** Strukturerad data för Google – HairSalon + Person i ett @graph-objekt. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.person.name,
        jobTitle: site.person.jobTitle,
        image: `${site.url}${site.hero.imageSrc}`,
        url: site.url,
        sameAs: [site.instagram.url, site.tiktok.url],
        worksFor: { "@id": `${site.url}/#business` },
        knowsAbout: [
          "taper fade",
          "herrklippning",
          "skäggtrim",
          "barber",
          "frisör Arvika",
        ],
      },
      {
        "@type": "HairSalon",
        "@id": `${site.url}/#business`,
        name: site.workplace.legalName,
        alternateName: site.workplace.name,
        url: site.workplace.website,
        telephone: site.workplace.salonPhoneTel,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.workplace.streetAddress,
          postalCode: site.workplace.postalCode,
          addressLocality: site.workplace.city,
          addressCountry: site.workplace.country,
        },
        employee: { "@id": `${site.url}/#person` },
        areaServed: {
          "@type": "City",
          name: "Arvika",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
