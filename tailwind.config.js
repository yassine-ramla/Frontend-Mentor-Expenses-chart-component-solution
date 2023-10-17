/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mySoftRed: "hsl(10, 79%, 65%)",
        myHoveredSoftRed: "hsl(10, 79%, 75%)",
        myCyan: "hsl(186, 34%, 60%)",
        myHoveredCyan: "hsl(186, 34%, 75%)",
        myDarkBrown: "hsl(25, 47%, 15%)",
        myMediumBrown: "hsl(28, 10%, 53%)",
        myCream: "hsl(27, 66%, 92%)",
        myVeryPaleOrange: "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        myFont: ["'DM Sans', sans-serif"],
      },
      gridTemplateRows: {
        3: "1fr 4fr 2fr"
      }
    },
  },
  plugins: [],
};
