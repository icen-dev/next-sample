import { createTheme } from "@mui/material/styles";

// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//     xs: false; // removes the `xs` breakpoint
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true; // adds the `mobile` breakpoint
//     tablet: true;
//     laptop: true;
//     desktop: true;
//   }
// }

export const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },
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
