import { createTheme } from "@material-ui/core";
import "./global.css";

const theme = createTheme({
  typography: {
    fontFamily: "Assistant",
    body1: {
      fontSize: 20,
    },

    h1: {
      fontFamily: "Yeseva One",
      fontSize: 22,
      "@media screen and (min-width: 440px)": {
        fontSize: 32,
      },     
    },
  },
  
});

export default theme;
