import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

const primaryColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const lightToDarkShadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

const createThemeFromColors = (colorPalette: any, shadeMapping: any, invert = false) => {
  const themeObject: any = {};
  primaryColors.forEach((color) => {
    themeObject[color] = {};
    Object.entries(shadeMapping).forEach(([lightShade, darkShade]: any) => {
      const shadeKey = invert ? darkShade : lightShade;
      themeObject[color][lightShade] = colorPalette[color][shadeKey];
    });
  });
  return themeObject;
};

const lightModeTheme = createThemeFromColors(colors, lightToDarkShadeMapping);
const darkModeTheme = createThemeFromColors(colors, lightToDarkShadeMapping, true);

const appThemes = {
  light: {
    ...lightModeTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkModeTheme,
    white: colors.gray["950"],
    black: colors.gray["50"],
  },
};

const tailwindConfig: Config = {
  darkMode: "class",
  content: [
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
    },
  },
  plugins: [createThemes(appThemes)],
};

export default tailwindConfig;
