// src/App.jsx
import { ThemeProvider, CssBaseline } from "@mui/material";
import muiTheme from "./theme/muiTheme";
import AppRouter from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}
