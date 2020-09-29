import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
}));

export default useStyles;