/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        paytone: ['"Paytone One"', "sans-serif"],
      },
      colors: {
        red: {
          110: "#1877F2",
          120: "#F9F9F9",
          130: "#E3E3E3",
          140: "#767676",
          150: "#828282",
          220: "#0E1133",
          160: "#E4E4E4",
          170: "#EAF3FE",
          180: "#161616",
          190: "#12CC5C",
          230: "#030303",
          210: "#F4F4F4",
          240: "#EEEEEE",
          250: "#6F6F6F",
          260: "#B7B7B7",
          270: "#757575",
          280: "#6C6C6C"
        },
      },
    },
  },
  plugins: [],
};
