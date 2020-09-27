import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tagItem: {
        margin: '10px',
        [theme.breakpoints.down('sm')]: {
          margin: '5px',
        },
      },
}));

export default useStyles;