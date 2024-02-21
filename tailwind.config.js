/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        LightRed: "hsl(15, 100%, 70%)", // (work)
        SoftBlue: "hsl(195, 74%, 62%)", // (play)
        LightRedTwo: "hsl(348, 100%, 68%)", //(study)
        LimeGreen: "hsl(145, 58%, 55%)", // (exercise)
        Violet: "hsl(264, 64%, 52%)", //  (social)
        SoftOrange: "hsl(43, 84%, 65%)", // (self care)
        VeryDarkBlue: "hsl(226, 43%, 10%)",
        DarkBlue: "hsl(235, 46%, 20%)",
        DesaturatedBlue: "hsl(235, 45%, 61%)",
        PaleBlue: "hsl(236, 100%, 87%)",
        HoverCard: "hsl(235, 45%, 35%)",
      },
    },
  },
  plugins: [],
};
