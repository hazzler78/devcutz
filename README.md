# devcutz.se – Devins landningssida

Modern **Next.js 15 (App Router)**-sida med **Tailwind CSS v4** och **TypeScript**. En scroll-vänlig startsida optimerad för **lokal SEO i Arvika** och **bokning via Instagram DM**.

## Kom igång lokalt

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

Bygga för produktion:

```bash
npm run build
npm start
```

## Deploy (enklast: Vercel)

1. Skapa konto på [vercel.com](https://vercel.com) och koppla GitHub/GitLab om du versionerar projektet.
2. **Import project** → välj den här mappen / repot.
3. Framework: Next.js (auto). Klicka **Deploy**.
4. Under **Settings → Domains** lägger du till **devcutz.se** och följer Vercels DNS-instruktioner hos domänleverantören.

**Netlify** funkar också bra: koppla repot, build command `npm run build`, publish directory `.next` används automatiskt via Netlifys Next-plugin, eller kör `next export` om du byter strategi – för Next 15 rekommenderas Vercel eller Netlify med officiellt Next-stöd.

Efter deploy: uppdatera `site.url` i `src/config/site.ts` till `https://devcutz.se` om den fortfarande pekar på placeholder (den ska matcha den riktiga domänen för OG-länkar och schema).

## Uppdatera texter & priser

Allt “innehåll” samlas i **`src/config/site.ts`**:

- Rubriker, bio, öppettider, telefon, länkar till Instagram/TikTok och **Noiz** (`noiz.se`, Magasinsgatan 7).
- **Priser** – arrayen `prices.items`.
- **Hero-bild** – fältet `hero.imageSrc` (standard: **`/devin-hero.jpeg`** i `public/`).
- **Bilder & filmer** – sektionen styrs av `media.photos` och `media.clips` (sökvägar till filer i `public/`).

WhatsApp-filer har döpts om till enkla namn (enkla URL:er):

| Fil i `public/` | Användning |
|------------------|------------|
| `devin-hero.jpeg` | Hero / OG-bild |
| `devin-gallery-1.jpeg`, `devin-gallery-2.jpeg` | Bildrutnät under “Från stolen” |
| `devin-clip-1.mp4` … `devin-clip-5.mp4` | Video-rad (swipe på mobil) |

Byt ut innehåll genom att ersätta filerna **med samma filnamn**, eller lägg till nya filer och uppdatera listorna i `site.ts`.

Spara filen och ladda om sidan.

## Byt färger (t.ex. cyan istället för neon green)

I **`src/app/globals.css`**:

```css
:root {
  --accent: #00ff9d; /* byt till t.ex. #22d3ee för el-cyan */
}
```

Bakgrund för mörka ytor styrs ofta med Tailwind-klasser som `bg-[#0f0f0f]` i komponenterna – sök efter `#0f0f0f` / `#111111` i `src/components` om du vill tweaka hela viben.

## Instagram på sidan (widget – rekommenderat)

**Ja** – bästa sättet att visa Devins senaste inlägg från **@devvcuts** utan manuell uppladdad är en **Instagram-widget** (tredjepart som pratar med Instagram åt dig). Sidan har redan en sektion som bara väntar på en **iframe-URL**.

### Varför inte “bara API”?

Meta/Instagram kräver i praktiken app-review, Business-konto m.m. för egna integrationer. För en enkel landningssida är en **widget** (LightWidget, EmbedSocial, Elfsight …) det som brukar funka smoothest.

### Steg: LightWidget (vanligast, finns gratisnivå)

1. Gå till [lightwidget.com](https://lightwidget.com) och skapa konto / logga in.
2. Koppla **Instagram** enligt deras guide och skapa en **widget** som visar flödet för **@devvcuts**.
3. När du får **inbäddningskoden** (`<iframe … src="https://…">`): kopiera bara **`src`-värdet** – en fullständig adress som börjar med `https://` (t.ex. `https://cdn.lightwidget.com/widgets/xxxx.html`).
4. Lokalt: skapa filen **`.env.local`** i projektroten (samma mapp som `package.json`) med:

   ```env
   NEXT_PUBLIC_INSTAGRAM_WIDGET_URL=https://cdn.lightwidget.com/widgets/DITT-ID.html
   ```

5. **Starta om** dev-servern (`Ctrl+C` → `npm run dev`). Next läser bara in `.env` vid start.
6. **Vercel:** Project → **Settings** → **Environment Variables** → lägg till samma nyckel och värde för **Production** (och **Preview** om du vill). Kör sedan en **ny deploy** (Redeploy) så bygget får variabeln.

Sektionen **“Mina senaste klippningar @devvcuts”** (`InstagramFeed`) visar då en **iframe** med ditt flöde. Om variabeln saknas eller är fel (t.ex. saknar `https://`) visas en **tydlig fallback** med instruktioner.

### Andra tjänster

[EmbedSocial](https://embedsocial.com), [Elfsight Instagram Feed](https://elfsight.com/instagram-feed-instashow/) m.fl. funkar också – det viktiga är att du klistrar in **själva iframe-URL:en** (`https://…`) i `NEXT_PUBLIC_INSTAGRAM_WIDGET_URL`, inte hela HTML-blocket.

### Felsökning

- **Tom ruta / inget syns:** dubbelkolla att URL:en är exakt den i `src` från iframen, och att den börjar med `https://`.
- **Fungerar lokalt men inte på devcutz.se:** miljövariabeln saknas i Vercel eller sidan är inte ombyggd efter att du sparat variabeln.
- **Widget kräver inloggning i Instagram:** följ leverantörens steg; ibland måste kontot vara **publikt** eller kopplat som de beskriver.

## TikTok

Länken ligger i `site.ts` under `tiktok`. Byt `url` och `handle` om kontot inte heter samma som Instagram.

## Domän

**devcutz.se** passar varumärket, är kort och lätt att säga i DM. Koppla den till Vercel/Netlify enligt deras guide och peka `www` om du vill ha både med och utan `www` (301-redirect konfigureras i hosting-panelen).

## Projektstruktur (kort)

| Sökväg | Vad det är |
|--------|----------------|
| `src/app/page.tsx` | Sätter ihop alla sektioner |
| `src/app/layout.tsx` | SEO-metadata, Open Graph, typsnitt |
| `src/app/globals.css` | Tema / accentfärg |
| `src/config/site.ts` | **Allt innehåll** Devin kan ändra |
| `src/components/*` | Navbar, Hero, sektioner, footer |
| `src/components/DevinMedia.tsx` | Lokala foton + videor från `public/` |
| `src/components/JsonLd.tsx` | JSON-LD (Person + HairSalon) |

Lycka till – kör hårt med fadesen.
