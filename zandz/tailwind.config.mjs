/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFEEE1",
        foreground: "#149954",
        button: "#E4312B",
        secondary: "#F3FCF4",
        primary: "#103A12",
      },
    },
  },
  plugins: [],
};
