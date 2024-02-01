import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius:{
        "xs": "4px"
      },
      colors:{
        "btn-primary": "#014598",
        "btn-primary-hover": "#01397F",
        "btn-primary-selected": "#012E65",
        "btn-disabled": "#b2b3b4",
        "btn-outline-disabled": "#22252A",
        
        "btn-secondary": "#E6F1FF",
        "btn-secondary-hover": "#CCE3FF",
        "btn-secondary-selected": "#B3D5FF",

        "btn-outline": "#FFFFFF",
        "btn-outline-hover": "#F5F9FF",
        "btn-outline-selected": "#CCE3FF",
        "btn-outline-danger-hover": "#FDF7F7",
        "btn-outline-danger-selected": "#F5D6D6",

        "btn-danger": "#CC3333",
        "btn-danger-hover": "#A32929",
        "btn-danger-selected": "#7A1F1F",

        "primary": "#2E3238",
        "blue": "#014598",
        "red": "#CC3333",
        "gray": "#737E8D",

        "disabled": "#22252A59",
        "link-primary": "#014598"
      },
      borderColor:{
        "strong":"#C7CBD1",
        "focus": "#014598"
      },
      // screens: {
      //   'sm': '576px',
      //   'md': '768px',
      //   'lg': '992px',
      //   'xl': '1200px',
      //   'custom': {'min': '1400px'},
      // },
    },
  },
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    // ... other rules ...
  ],
  plugins: [],
};
export default config;
