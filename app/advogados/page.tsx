import type { Metadata } from "next";
import { NichePage } from "@/components/NichePage";
import { advogadosContent } from "@/lib/content/advogados";

export const metadata: Metadata = {
  title: advogadosContent.seo.title,
  description: advogadosContent.seo.description,
  keywords: advogadosContent.seo.keywords,
  alternates: { canonical: "/advogados" },
  openGraph: {
    title: advogadosContent.seo.title,
    description: advogadosContent.seo.description,
    url: "/advogados",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: advogadosContent.seo.title,
    description: advogadosContent.seo.description,
  },
};

export default function AdvogadosPage() {
  return <NichePage content={advogadosContent} />;
}
