import { createTheme } from "@material-ui/core";
import "./global.css";

const theme = createTheme({
  typography: {
    fontFamily: "Assistant",
    body1: {
      fontSize: 20,
    },

    h1: {
      fontSize: 22,
      "@media screen and (min-width: 440px)": {
        fontSize: 30,
      },
      fontWeight: 700,
    },
  },
  
});

export default theme;
