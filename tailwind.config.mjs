/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDelay: {
        '2000': '2000ms',
      },
      colors: {
        //Primary Color
        "a-yellow-F8AF23": "#F8AF23",
        "a-yellow-FFD179": "#FFD179",
        "a-yellow-FFF4DF": "#FFF4DF",
        "a-brown-5F360D": "#5F360D",
        //Secondary Color
        "a-blue-01378B": "#01378B",
        "a-blue-0E4D8F": "#0E4D8F",
        "a-blue-3E7ADB": "#3E7ADB",
        "a-blue-A8C7FA": "#a8c7fa",
        //Base Color
        "a-black-0B0B0B": "#0B0B0B",
        "a-gray-696F6F": "#696F6F",
        "a-gray-BEC1C1": "#BEC1C1",
        "a-gray-F0F0F0": "#F0F0F0"
      },
      fontSize: {
        80: "5rem",
        66: "4.125rem",
        64: "4rem",
        54: "3.375rem",
        44: "2.75rem",
        36: "2.25rem",
        30: "1.875rem",
        24: "1.5rem",
        20: "1.25rem",
      },
      spacing: {
        "10px": "10px",
      },
      borderReaius: {
        3: "3px",
        5: "5px",
        10: "10px",
        40: "40px",
      },
      screens: {
        mobile: "576px",
        // => @media (min-width: 576px) { ... }
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#01378B",
          info:"#3E7ADB"
        }
      }
    ],
  },
  plugins: [require("daisyui")],
  // plugins: [require("daisyui"),require('flowbite/plugin')],
};
