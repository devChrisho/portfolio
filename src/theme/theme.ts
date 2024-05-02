import { createTheme } from "@mui/material";
import store from "../redux/store";

const { isDarkMode } = store.getState().system;

const theme = createTheme({
  palette: {
    mode: isDarkMode ? "light" : "dark",
    //     mode: "dark",
    //     ...(isDarkMode ? { primary: { main: "#FFF" } } : {}),
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Inter",
      "Avenir",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

(window as any).theme = theme;

export default theme;
