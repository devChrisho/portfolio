import { ThemeOptions } from "@mui/material";
import poppinsThin from "../assets/fonts/Poppins-Thin.ttf";
import poppinsThinItalic from "../assets/fonts/Poppins-ThinItalic.ttf";
import poppinsExtraLight from "../assets/fonts/Poppins-ExtraLight.ttf";
import poppinsExtraLightItalic from "../assets/fonts/Poppins-ExtraLightItalic.ttf";
import poppinsLight from "../assets/fonts/Poppins-Light.ttf";
import poppinsLightItalic from "../assets/fonts/Poppins-LightItalic.ttf";
import poppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import poppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import poppinsMediumItalic from "../assets/fonts/Poppins-MediumItalic.ttf";
import poppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import poppinsSemiBoldItalic from "../assets/fonts/Poppins-SemiBoldItalic.ttf";
import poppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import poppinsBoldItalic from "../assets/fonts/Poppins-BoldItalic.ttf";
import poppinsExtraBold from "../assets/fonts/Poppins-ExtraBold.ttf";
import poppinsExtraBoldItalic from "../assets/fonts/Poppins-ExtraBoldItalic.ttf";
import poppinsBlack from "../assets/fonts/Poppins-Black.ttf";
import poppinsBlackItalic from "../assets/fonts/Poppins-BlackItalic.ttf";

const themeOptionsGenerator = ({
  isDarkMode,
}: {
  isDarkMode: boolean;
}): ThemeOptions => {
  return {
    palette: {
      mode: isDarkMode ? "dark" : "light",
      ...(isDarkMode
        ? {
            primary: {
              main: "hsla(162, 75%, 50%, 0.851)",
            },
            background: {
              default: "hsl(162, 15%, 8%)",
              paper: "hsl(162, 15%, 8%)",
            },
            text: {
              primary: "hsla(162, 75%, 50%, 0.851)",
              secondary: "hsl(192, 75%, 50%)",
            },
          }
        : {
            primary: {
              main: "hsla(162, 15%, 8%, 0.851)",
            },
            background: {
              default: "hsl(0, 0%, 95%)",
              paper: "hsl(0, 0%, 95%)",
            },
            text: {
              primary: "hsla(163, 14%, 8%, 0.851)",
              secondary: "hsl(192, 75%, 50%)",
            },
          }),
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
    components: {
      MuiCssBaseline: {
        styleOverrides: `
       @font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 100;
  src: local("Poppins"), url(${poppinsThin}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 100;
  src: local("Poppins"),
    url(${poppinsThinItalic}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 200;
  src: local("Poppins"),
    url(${poppinsExtraLight} format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 200;
  src: local("Poppins"),
    url(${poppinsExtraLightItalic}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  src: local("Poppins"),
    url(${poppinsLight}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 300;
  src: local("Poppins"),
    url(${poppinsLightItalic}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  src: local("Poppins"),
    url(${poppinsRegular}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  src: local("Poppins"),
    url(${poppinsMedium}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 500;
  src: local("Poppins"),
    url(${poppinsMediumItalic}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  src: local("Poppins"),
    url(${poppinsSemiBold}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 600;
  src: local("Poppins"),
    url(${poppinsSemiBoldItalic}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  src: local("Poppins"), url(${poppinsBold}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 700;
  src: local("Poppins"),
    url(${poppinsBoldItalic}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  src: local("Poppins"),
    url(${poppinsExtraBold}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 800;
  src: local("Poppins"),
    url(${poppinsExtraBoldItalic}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  src: local("Poppins"),
    url(${poppinsBlack}) format("truetype");
}

@font-face {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 900;
  src: local("Poppins"),
    url(${poppinsBlackItalic}) format("truetype");
}
      `,
      },
    },
  };
};

export default themeOptionsGenerator;
