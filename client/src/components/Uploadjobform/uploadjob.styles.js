import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    uploadJobForm: {
        padding: theme.spacing(8, 0, 6),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadJobFormFileLabel: {
        margin: "10px"
    }
}));

export default useStyles;