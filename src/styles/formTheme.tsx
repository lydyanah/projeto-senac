import { createTheme } from '@material-ui/core';
import './global.css';



  const theme = createTheme({
    typography: {
      fontFamily: 'Assistant', 
      subtitle1: {
        fontSize: 12,
      },
      
      h2: {
        fontFamily: 'Yeseva One',
        fontSize: 32,
      },
    },
  });
  
export default theme;