import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",

        background: "var(--color-background)",
        surface: "var(--color-surface)",

        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        muted: "var(--color-text-muted)",

        border: "var(--color-border)",

        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        info: "var(--color-info)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },

      maxWidth: {
        container: "var(--container)",
        content: "var(--content)",
        card: "var(--card)",
      },

      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },
    },
  },

  plugins: [],
};

export default config;
