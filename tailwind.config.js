/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // ativa dark mode via classe
  theme: {
    extend: {
      colors: {
        background: "var(--background, #f9fafb)",
        foreground: "var(--foreground, #111827)",
        primary: "var(--primary, #1e3a8a)",
        secondary: "var(--secondary, #3b82f6)",
        accent: "#10b981", // verde padrão do botão WhatsApp
        muted: "#d1d5db",
        darkBackground: "#111827",
        darkText: "#f9fafb",
        darkSurface: "#1f2937",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
      boxShadow: {
        soft: "0 5px 15px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
