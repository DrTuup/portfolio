/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      "bounce-arrow": {
        "0%, 20%, 50%, 80%, 100%": {
          transform: "translateY(0)",
        },
        "40%": {
          transform: "translateY(30px)",
        },
        "60%": {
          transform: "translateY(15px)",
        },
      },
    },
    animation: {
      "bounce-arrow": "bounce-arrow 2s infinite",
    },
    colors: {
      foreground: "#ffffff",
      background: "#1e1f21",
      primary: "#6ee7b7",
    },
    extend: {
      boxShadow: {
        "card-shadow":
          "0px 11px 15px -7px rgba(110, 231, 183, 0.2), 0px 24px 38px 3px rgba(110, 231, 183, 0.14), 0px 9px 46px 8px rgba(110, 231, 183, 0.12)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        defaulttheme: {
          foreground: "#ffffff",
          background: "#1e1f21",
          primary: "#6ee7b7",
        },
      },
    ],
  },
};
