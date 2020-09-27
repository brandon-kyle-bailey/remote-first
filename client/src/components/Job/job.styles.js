import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    jobCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
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
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          justifyContent: 'flex-start',
        },
      },
      descriptionAndSalary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column-reverse',
          justifyContent: 'flex-start',
        },
      },
      tagAndLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column-reverse',
        },
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
        [theme.breakpoints.down('sm')]: {
          margin: '5px',
        },
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
      imageWrapper: {
        width: '25%',
        margin: 'auto',
      },
      image: {
        display: 'block',
        width: '100%',
        maxWidth: '250px',
        height: 'auto',
        margin: 'auto',
      },
}));

export default useStyles;