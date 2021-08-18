import { makeStyles } from '@material-ui/core';
import './global.css';

  
const formStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '30rem',
    },
    
    field: {
      marginTop: theme.spacing(2),
    },

    submitButton: {
        marginTop: theme.spacing(2),
      },
}));

export default formStyles;