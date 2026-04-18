import { createElement as h } from "react";
import { site } from "@/config/site";

/**
 * Markup för `next/og` ImageResponse — byggt med `createElement` så Satori inte får
 * whitespace-textnoder mellan JSX-taggar (kraschar annars med flera barn).
 */
export function OgCard() {
  const domain = site.url.replace(/^https?:\/\//, "");
  const firstName = site.person.name.split(" ")[0] ?? site.person.name;

  const shellStyle = {
    height: "100%",
    width: "100%",
    display: "flex" as const,
    flexDirection: "column" as const,
    backgroundColor: "#0f0f0f",
    backgroundImage: "linear-gradient(155deg, #141414 0%, #0a0a0a 42%, #101010 100%)",
    color: "#fafafa",
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const rowStyle = {
    display: "flex" as const,
    flexDirection: "row" as const,
    flex: 1,
    padding: 52,
    gap: 40,
  };

  const accent = h("div", {
    key: "accent",
    style: {
      width: 10,
      backgroundColor: "#00ff9d",
      borderRadius: 5,
      flexShrink: 0,
      boxShadow: "0 0 40px rgba(0, 255, 157, 0.35)",
    },
  });

  const headerRow = h(
    "div",
    {
      key: "row",
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 24,
      },
    },
    h(
      "span",
      {
        style: {
          fontSize: 56,
          fontWeight: 800,
          color: "#00ff9d",
          letterSpacing: -2,
        },
      },
      site.brand,
    ),
    h(
      "span",
      { style: { fontSize: 24, fontWeight: 600, color: "rgba(255,255,255,0.4)" } },
      domain,
    ),
  );

  const headline = h(
    "div",
    {
      key: "h1",
      style: {
        marginTop: 40,
        fontSize: 54,
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: -2,
      },
    },
    "Fresh taper fades",
  );

  const sub = h(
    "div",
    {
      key: "sub",
      style: {
        marginTop: 10,
        fontSize: 38,
        fontWeight: 700,
        color: "rgba(255,255,255,0.92)",
      },
    },
    `med ${firstName} i ${site.workplace.city}`,
  );

  const meta = h(
    "div",
    {
      key: "meta",
      style: {
        marginTop: 22,
        fontSize: 24,
        color: "rgba(255,255,255,0.48)",
        lineHeight: 1.35,
        maxWidth: 780,
      },
    },
    `${site.person.age} år · lärling · ${site.workplace.name} · boka via Noiz`,
  );

  const body = h(
    "div",
    { key: "body", style: { display: "flex", flexDirection: "column" } },
    headerRow,
    headline,
    sub,
    meta,
  );

  const foot = h(
    "div",
    {
      key: "foot",
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        paddingTop: 26,
        gap: 20,
      },
    },
    h("span", { style: { fontSize: 20, color: "rgba(255,255,255,0.5)" } }, site.workplace.addressSingleLine),
    h("span", { style: { fontSize: 22, fontWeight: 700, color: "#00ff9d" } }, site.bookNoiz.ctaShort),
  );

  const main = h(
    "div",
    {
      key: "main",
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        minWidth: 0,
      },
    },
    body,
    foot,
  );

  const row = h("div", { key: "row", style: rowStyle }, accent, main);

  return h("div", { style: shellStyle }, row);
}
