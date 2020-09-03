import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../assets';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20
    },
    language: {
        marginTop: 13,
    },
    label: {
        cursor: 'pointer',
        color: colors.white
    },
    container: {
        backgroundColor: colors.primary, 
        width: '100vw',
        height: '100vh',
        display: 'flex',
    },
    content:{
        width: '100',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header:{
        color: colors.white,
        marginTop: 50

    },
}));

export default useStyles;