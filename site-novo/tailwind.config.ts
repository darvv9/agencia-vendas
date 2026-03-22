import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4: tokens em `app/globals.css` (@theme inline) + PostCSS (`@tailwindcss/postcss`).
 * `content` abaixo alinha ferramentas e cenários em que o scanner precisa de caminhos explícitos.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
