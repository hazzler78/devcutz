import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { OgCard } from "@/lib/og-card";

export const alt = `Devcutz – ${site.person.name}, taper fade & barber i ${site.workplace.city}`;

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

/** Twitter / X large image card – samma layout som Open Graph. */
export default function TwitterImage() {
  return new ImageResponse(<OgCard />, { ...size });
}
