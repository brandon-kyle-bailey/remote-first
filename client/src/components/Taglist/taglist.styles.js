import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tagsList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '50%',
      },
}));

export default useStyles;