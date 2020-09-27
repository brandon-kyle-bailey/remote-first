import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    jobCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          justifyContent: 'center',
        },
      },
      jobCardBody: {
        display: 'flex',
        flexDirection:'column'
      },
      positionAndCompany: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      descriptionAndSalary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '50%',
        overflow: 'hidden',
        // flex-grow: 0; flex-shrink: 0; flex-basis: 50%
      },
      tagAndLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '50%',
      },
      tagsList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '50%',
      },
      tagItem: {
        margin: '10px',
      },
      jobApplyAction: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '25%',
      },
      link: {
        margin: theme.spacing(1, 1.5),
      },
}));

export default useStyles;