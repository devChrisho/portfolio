import { useEffect, useMemo } from "react";
import "./App.css";
import {
  Box,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectSystem } from "./redux/selectors/systemSelectors";
import themeOptionsGenerator from "./theme/themeOptions";
import TopAppBar from "./components/TopAppBar";

function App() {
  // Redux states
  const { isDarkMode } = useSelector(selectSystem);

  const themeOptions: ThemeOptions = useMemo(() => {
    return themeOptionsGenerator({ isDarkMode });
  }, [isDarkMode]);

  const theme = useMemo(() => createTheme(themeOptions), [themeOptions]);

  useEffect(() => {
    (window as any).theme = theme;
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box sx={{ flexGrow: 1, height: "100vh" }}>
            <TopAppBar />
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
