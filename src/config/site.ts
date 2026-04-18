/**
 * devcutz.se – allt innehåll Devin (eller pappa) kan uppdatera på ett ställe.
 * Spara filen efter ändringar och kör om dev-servern om något ser konstigt ut.
 *
 * Mediafiler ligger i `public/` med enkla namn (byt ut filerna men behåll gärna samma filnamn):
 * - devin-hero.jpeg, devin-gallery-1.jpeg, devin-gallery-2.jpeg
 * - devin-clip-1.mp4 … devin-clip-5.mp4
 */
export const site = {
  /** Byt till riktig domän när den är live (viktigt för OG-länkar). */
  url: "https://devcutz.se",

  brand: "devcutz",
  title: "Devcutz | Devin Söderberg – frisör, taper fade & klippning i Arvika",

  description:
    "Fresh taper fades i Arvika med Devin Söderberg (18), lärling på Noiz Barbershop på Magasinsgatan 7. Herrfrisör, barnklippning, skäggtrim – boka via Instagram DM @devvcuts.",

  /** Instagram – huvud-CTA */
  instagram: {
    handle: "devvcuts",
    url: "https://www.instagram.com/devvcuts/",
  },

  /**
   * TikTok – uppdatera till rätt @ om den skiljer sig från Instagram.
   * Mest innehåll här, men bokning sker via IG enligt brief.
   */
  tiktok: {
    handle: "devvcuts",
    url: "https://www.tiktok.com/@devvcuts",
  },

  phone: "070-279 82 98",
  phoneTel: "+46702798298",

  person: {
    name: "Devin Söderberg",
    jobTitle: "Lärling / barber",
    age: 18,
  },

  /**
   * Noiz – officiell sajt noiz.se, adress Magasinsgatan 7 (Arvika Shopping / centrum).
   * Salongens växel (om kunder ringer Noiz direkt).
   */
  workplace: {
    /** Det namn vi visar på sidan (barberdelen). */
    name: "Noiz Barbershop",
    /** För schema.org / Google – samma verksamhet som noiz.se */
    legalName: "Noiz Frisör",
    city: "Arvika",
    website: "https://noiz.se/",
    streetAddress: "Magasinsgatan 7",
    postalCode: "671 31",
    country: "SE",
    /** En rad för footers, kartrubrik m.m. */
    addressSingleLine: "Magasinsgatan 7, 671 31 Arvika",
    salonPhoneTel: "+4657010011",
    salonPhoneDisplay: "0570-100 11",
  },

  /** Google Maps embed utan API-nyckel – pekar på adressen ovan. */
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Magasinsgatan+7,+671+31+Arvika,+Sverige&z=17&output=embed",

  hero: {
    headline: "Fresh taper fades med Devin i Arvika",
    sub:
      "18-årig lärling på Noiz Barbershop • Taper fades, nice finish och puts på toppen",
    ctaDm: "Boka via DM nu",
    ctaGallery: "Se mina klippningar",
    ctaPrices: "Kolla priserna",
    /** Lokal fil i `public/` – byt bild genom att ersätta filen med samma namn. */
    imageSrc: "/devin-hero.jpeg",
    imageAlt:
      "Devin Söderberg, barber och frisör i Arvika, klipper taper fade på Noiz Barbershop",
  },

  about: {
    title: "Yo, jag är Devin",
    body:
      "Hej! Jag är Devin Söderberg, 18 år och lärling på Noiz i Arvika. Jag kör mest taper fades med snygg finish och puts på toppen. Vill du ha en fresh look som passar just dig? DM mig på Instagram så fixar vi det.",
  },

  /** Egna foton (utöver hero) – lägg fler i `public/` och lista här. */
  media: {
    title: "Från stolen – bilder & filmer",
    intro:
      "Här är lite grejer rakt från sessionerna. Vill du se mer rörligt och flöde – kika TikTok/Instagram också.",
    photos: [
      {
        src: "/devin-gallery-1.jpeg",
        alt: "Taper fade och detaljerad finish – Devin Söderberg, herrfrisör och barber i Arvika",
      },
      {
        src: "/devin-gallery-2.jpeg",
        alt: "Klippning och linjer i barberstolen på Noiz Barbershop, Arvika",
      },
    ],
    /** Korta etiketter visas under varje video (ändra fritt). */
    clips: [
      { src: "/devin-clip-1.mp4", label: "Clip 1" },
      { src: "/devin-clip-2.mp4", label: "Clip 2" },
      { src: "/devin-clip-3.mp4", label: "Clip 3" },
      { src: "/devin-clip-4.mp4", label: "Clip 4" },
      { src: "/devin-clip-5.mp4", label: "Clip 5" },
    ],
  },

  /**
   * Instagram-flöde på sidan styrs av miljövariabeln `NEXT_PUBLIC_INSTAGRAM_WIDGET_URL`
   * (iframe-URL från t.ex. LightWidget). Se README.
   */
  gallery: {
    title: "Mina senaste klippningar @devvcuts",
    /** Kort beskrivning under rubriken (SEO + tydlighet). */
    intro:
      "Här syns grejer jag kört nyligen. Vill du se mer – scrolla flödet eller hoppa in på Instagram.",
  },

  prices: {
    title: "Priser – rakt på sak",
    items: [
      { label: "Herrklippning / fade", price: "100 kr" },
      { label: "Barnklippning", price: "75 kr" },
      { label: "Skäggtrim", price: "50 kr" },
      { label: "Klippning + skägg", price: "140 kr" },
    ],
  },

  hours: {
    title: "När jag är på plats",
    lines: [
      { day: "Onsdag", time: "10:30–17:00" },
      { day: "Torsdag", time: "10:30–15:30" },
      { day: "Fredag", time: "10:30–17:00" },
    ],
  },

  booking: {
    title: "Boka tid – inga krångliga formulär",
    body:
      "Skippa telefonköer och mejl. Skriv bara i mina Instagram-DM:s så svarar jag så fort jag kan. Där kan du skicka inspo-bilder och säga hur du vill ha det.",
    cta: "Skriv till mig på Instagram DM",
  },

  contact: {
    title: "Kontakt & hitta hit",
    dmLine: "Bäst kontakt: Instagram DM @devvcuts",
    phoneNote: "Telefon funkar också, men DM är snabbast.",
  },
} as const;
