import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tá Online — Autoridade digital para negócios de alta performance",
  description:
    "Engenharia de software para negócios de luxo. Entrega única, sem mensalidade.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://agenciataonline.com.br",
    title: "Agência Tá Online | Sites de Alta Performance",
    description:
      "Engenharia de software para negócios de luxo. Entrega única, sem mensalidade.",
    images: ["https://agenciataonline.com.br/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-white">
        {children}
      </body>
    </html>
  );
}
