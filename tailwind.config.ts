import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"], display: ["Plus Jakarta Sans", "Inter", "ui-sans-serif"] }, colors: { ink: "#292329", rose: "#D86B91", blush: "#FCEEF2", cream: "#FFFAFB" }, boxShadow: { soft: "0 18px 60px rgba(168, 68, 105, .12)" } } },
  plugins: []
};
export default config;
