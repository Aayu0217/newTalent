/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,  // Center the container
      padding: '1rem',  // Default padding (16px)
      screens: {
        sm: '540px',  // Small screens (Bootstrap's container-sm)
        md: '720px',  // Medium screens (Bootstrap's container-md)
        lg: '960px',  // Large screens (Bootstrap's container-lg)
        xl: '1140px', // Extra large screens (Bootstrap's container-xl)
      },
    },
    extend: {
      screens: {
        ssmobile: { max: "459px" },
        smallMobile: { min: "400px", max: "499px" },
        saddMobile: { min: "460px", max: "575px" },
        smobile: { max: "575px" },
        mobile: { min: "576px", max: "767px" },
        tablet: { min: "768px", max: "991px" },
        laptop: { min: "992px", max: "1199px" },
        desktop: { min: "1200px" },
        tabview: { min: "960px", max: "991px" },
        subtablet: { min: "720px", max: "767px" },
      },
      fontFamily: {
        plusjakartaFont: ['Plus Jakarta Sans'],
        playfair: ['Playfair Display'],
        jost: ['Jost']
      },
      boxShadow: {
        box: "0px 0px 8px 0px #8282821F",
      },
      colors: {
        primary: "#F05637",
        white: "#FFFFFF",
        lightwhite: "#F2F2F2",
        black: "#000000",
        lightBlack: "#333333",
        lightgray: "#676767",
        blackshade: "#202020",
        darkblue: "#3B5999",
        gray: "#626262",
        grayshade: "#DBDFE7",
        whiteshade: "#FEFEFE",
        red: "#d22424",
      },
    },
  },
  plugins: [],
};
