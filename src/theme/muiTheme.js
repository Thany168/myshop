// src/theme/muiTheme.js
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#e91e8c", // Hot pink — brand accent
      dark: "#c0176f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2d3748", // Dark sidebar bg
    },
    background: {
      default: "#f4f6f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#2d3748",
      secondary: "#718096",
    },
    sidebar: {
      bg: "#2d3748",
      hover: "#3a4a5c",
      active: "#e91e8c",
      text: "#cbd5e0",
      activeText: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, textTransform: "none", fontWeight: 600 },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#2d3748",
          color: "#cbd5e0",
          borderRight: "none",
        },
      },
    },
  },
});

export default muiTheme;
