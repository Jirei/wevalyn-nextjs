/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "cta-contact": "0px 4px 2.91787px 0px rgba(0, 0, 0, 0.25)",
        "service-card": "0px 6.35911px 3.17955px 0px rgba(0, 0, 0, 0.25)",
      },
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
      },
      backgroundImage: {
        hero: `
        linear-gradient(rgba(0,105,181, 0.5),rgba(0,105,181, 0.5)),
        url('/hero.jpg')`,
        "primary-gradient":
          "linear-gradient(270deg, rgb(72 160 255) 0%, rgb(64 117 233) 100%)",
        "primary-gradient-dark-theme":
          "linear-gradient(270deg, rgb(23 59 77) 0%, rgb(0 72 95) 100%)",
        "background-dark-theme": `linear-gradient(
  45deg,
  hsl(0deg 0% 22%) 0%,
  hsl(344deg 0% 24%) 11%,
  hsl(344deg 0% 26%) 22%,
  hsl(344deg 0% 28%) 33%,
  hsl(344deg 0% 30%) 44%,
  hsl(344deg 0% 32%) 56%,
  hsl(344deg 0% 34%) 67%,
  hsl(344deg 0% 36%) 78%,
  hsl(344deg 0% 38%) 89%,
  hsl(0deg 0% 40%) 100%
)`,
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        normal: ["var(--font-arvo)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        // (light/dark) primary color
        primary: "#0069B5",
        "primary-dark-theme": "#4fcad1",
        // (light/dark) primary light color
        "primary-light": "#429ADA",
        "primary-light-dark-theme": "#76dde3",
        // (dark) primary dark color
        "primary-dark-dark-theme": "#3ca3a9",
        "gray-font": "#464646",
        // (dark) primary very dark color
        "primary-very-dark-dark-theme": "#305659",
        // (dark) background color
        //"background-dark-theme": "#464646",
        // (dark) contact button background
        "contact-button-background-dark-theme": "#a749a9",
        // (dark) contact button on hover,
        "contact-button-background-hover-dark-theme": "#99399b",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
