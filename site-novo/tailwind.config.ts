import type { Config } from "tailwindcss";

/**
 * Tailwind v4: tema principal está em `app/globals.css` (`@theme inline`).
 * Este arquivo existe para ferramentas/IDE e para manter a raiz do projeto
 * alinhada ao que o build do Next + `@tailwindcss/postcss` espera.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
