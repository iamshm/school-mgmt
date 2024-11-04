import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mySky: "#C3EBFA",
        mySkyLight: "#EDF9FD",
        myPurple: "#CFCEFF",
        myPurpleLight: "#F1F0FF",
        myYellow: "#FAE27C",
        myYellowLight: "#FEFCE8",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
