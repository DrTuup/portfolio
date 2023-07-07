/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      "bounce-arrow": {
        "0%, 20%, 50%, 80%, 100%": {
          transform: "translateY(0)",
        },
        "40%": {
          transform: "translateY(-30px)",
        },
        "60%": {
          transform: "translateY(-15px)",
        },
      },
    },
    animation: {
      "bounce-arrow": "bounce-arrow 2s infinite",
    },
  },
  plugins: [],
};
