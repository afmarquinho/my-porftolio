/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#07070f",
        mainOrange: "#fb773c",
        softBlue: "#d3d9f3",
        mainBlue: "#00bcd4ff",
        baseBlue: "#a0e9ff",
        deepBg: "#105369",
      },
    },
  },
  plugins: [],
};
