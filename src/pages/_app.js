import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
    addis: theme.palette.augmentColor({
      color: {
        main: "#f7941f",
      },
      name: "addis",
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
