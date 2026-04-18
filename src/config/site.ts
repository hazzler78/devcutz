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
    "Fresh taper fades i Arvika med Devin Söderberg (18), lärling på Noiz Barbershop på Magasinsgatan 7. Herrfrisör, barnklippning, skäggtrim – boka tid via Noiz onlinebokning.",

  /**
   * All bokning av tid sker via Noiz (salongens system).
   * Uppdatera URL om Noiz byter bokningsleverantör.
   */
  bookNoiz: {
    url: "https://bokning.voady.se/noiz/noiz/",
    cta: "Boka tid på Noiz",
    ctaShort: "Boka på Noiz",
    /** Rad under CTA:s i hero */
    heroNote:
      "Tider bokar du alltid via Noiz. På Instagram (@devvcuts) kan du kika inspo och se grejer jag kör – men boka via länken ovan.",
  },

  /** Instagram – portfolio / följ (inte primär bokning). */
  instagram: {
    handle: "devvcuts",
    url: "https://www.instagram.com/devvcuts/",
  },

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
      "Hej! Jag är Devin Söderberg, 18 år och lärling på Noiz i Arvika. Jag kör mest taper fades med snygg finish och puts på toppen. Vill du ha en fresh look? Boka tid via Noiz – där ser du när jag är på plats. Kika gärna in på Instagram om du vill ha inspo innan du kommer.",
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
    intro:
      "Här syns grejer jag kört nyligen. Bokning sker via Noiz – Instagram är mest för inspo och flöde.",
    widgetHint:
      "Widget nedan uppdaterar sig automatiskt när du kopplat den (se README) – slipper ladda upp varje bild på hemsidan.",
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
    title: "Boka tid – via Noiz",
    body:
      "Alla tider går via Noiz officiella onlinebokning. Där ser du när jag är på plats som lärling och kan välja tid som passar dig – samma regler och avbokning som för resten av salongen.",
    supportBody:
      "Vill du skicka inspo-bilder eller fråga något snabbt? DM på Instagram funkar – men sitta i stolen bokar du alltid genom Noiz.",
    cta: "Öppna Noiz onlinebokning",
    points: [
      "Lediga tider i realtid – inga dubbelbokningar.",
      "Tydliga regler för avbokning (läs på noiz.se om du är osäker).",
      "Tryggt för både dig och teamet på golvet.",
    ],
    sideTitle: "Varför via Noiz?",
    phoneNote: "Min mobil nedan är extra om något strular – bokning sker inte via DM.",
  },

  contact: {
    title: "Kontakt & hitta hit",
    bookLead: "Boka tid via Noiz onlinebokning",
    instagramLine: "Instagram är för inspo och uppdateringar – inte för att boka tid.",
    phoneNote: "Noiz växel om du har frågor om salongen:",
    hoursNote:
      "Tiderna nedan är när jag brukar vara på plats som lärling – dubbellkolla alltid i bokningssystemet när du bokar.",
  },
} as const;
