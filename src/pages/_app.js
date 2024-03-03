import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

export const riseFont = Montserrat({ subsets: ["cyrillic"] });
// import { Montserrat } from "next/font/google";

// const font = Montserrat({ subsets: ["cyrillic"] });

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

theme = createTheme({
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
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
