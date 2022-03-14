import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Noto Serif JP",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      light: "#F2FCFF",
      main: "#1F6074",
      dark: "#0F3D49",
      contrastText: "#F2FCFF",
    },
    secondary: {
      light: "#F6EED1",
      main: "#D2BA6F",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
