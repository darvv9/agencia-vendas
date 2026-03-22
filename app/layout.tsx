import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tá Online — Sites que vendem. Sem mensalidade.",
  description:
    "Mais clientes, mais lucro: sites e estrutura digital para academia, clínica, barbearia e loja. Você paga uma vez. Projeto pronto para uso.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
