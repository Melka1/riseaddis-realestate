import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

export const riseFont = Montserrat({ subsets: ["cyrillic"] });

let theme = createTheme({
  palette: {
    mode: "light",
  },
});

export let lTheme = createTheme(theme, {
  palette: {
    rise: theme.palette.augmentColor({
      color: {
        main: "#5d5c57",
      },
      name: "rise",
    }),
    riseLight: theme.palette.augmentColor({
      color: {
        main: "#f0f1f7",
      },
      name: "riseLight",
    }),
    addis: theme.palette.augmentColor({
      color: {
        main: "#f7941f",
      },
      name: "addis",
    }),
    addisLight: theme.palette.augmentColor({
      color: {
        main: "#fbca84",
      },
      name: "addisLight",
    }),
    darkHover: "#5d5c5740",
    lightHover: "#5d5c5715",
    background: {
      lighter: "#ffffffbb",
    },
    text: {
      contrast: "#000000dd",
    },
  },
});

export default function App({ Component, pageProps }) {
  // console.log(lTheme);
  return (
    <ThemeProvider theme={lTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
