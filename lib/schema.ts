import { SITE } from "./site";
import type { NicheContent } from "./content/types";

export function buildJsonLd(content: NicheContent): Record<string, unknown> {
  const url = `${SITE.baseUrl}${content.path === "/" ? "" : content.path}`;

  return {
    "@context": "https://schema.org",
    "@type": content.schemaKind,
    name: SITE.name,
    url,
    image: `${SITE.baseUrl}/logo.png`,
    description: content.seo.description,
    telephone: SITE.whatsapp.international,
    email: SITE.email,
    priceRange: "R$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.coordinates.latitude,
      longitude: SITE.address.coordinates.longitude,
    },
    areaServed: SITE.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [],
  };
}
