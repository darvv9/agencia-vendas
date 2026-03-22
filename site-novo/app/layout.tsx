import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tá Online — Soluções digitais para negócios de alto padrão",
  description:
    "Clínicas, academias, barbearias e comércios locais: autoridade online, foco em resultado e investimento único — sem mensalidade.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
