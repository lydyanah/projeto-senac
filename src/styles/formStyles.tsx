import { makeStyles} from '@material-ui/core';
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
    
    title: {
        fontSize: 22,
        "@media screen and (min-width: 440px)": {
          fontSize: 30,
        }, 
        textAlign: 'center',
    },

    field: {
        marginTop: theme.spacing(2),
    },

    submitButton: {
        marginTop: theme.spacing(2),
    },

    label: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: 700,
    },       
    
}));

  
export default formStyles;