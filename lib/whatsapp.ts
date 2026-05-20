import { SITE } from "./site";

export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp.raw}?text=${text}`;
}
