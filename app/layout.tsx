import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Fraunces } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#1a1f1c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default:
      "Tá Online — Sites profissionais para pequenos negócios em Niterói",
    template: "%s",
  },
  description:
    "Agência de Niterói que cuida do site inteiro pra você: domínio, hospedagem, suporte e alterações. Foco em personal trainers, advogados e clínicas de estética.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "agência de sites Niterói",
    "site para personal trainer Niterói",
    "site para advogado Niterói",
    "site para clínica de estética Niterói",
    "criação de sites Niterói",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    url: SITE.baseUrl,
    title: "Tá Online — Sites profissionais em Niterói",
    description:
      "Site profissional + domínio + hospedagem + suporte + alterações. Tudo cuidado por nós, em Niterói.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tá Online — Sites profissionais em Niterói",
    description:
      "Site profissional pra pequenos negócios em Niterói. Tudo cuidado por nós.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, telephone: false, address: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
