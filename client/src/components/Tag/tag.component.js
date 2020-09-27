import React, {useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './tag.styles';

import { GlobalContext } from '../../context/global-state.context';


function Tag(props) {
    const tag = props.tag;
    const styles = useStyles();
    const {searchJobs} = useContext(GlobalContext);

    const handleClick = () => {
      searchJobs(tag);
    }

    return(
        <Typography className={styles.tagItem} component="a" variant="subtitle1" align="center" key={tag}>
          <Button size="small" variant="outlined" color="primary" onClick={handleClick}>{tag}</Button>
        </Typography>
        );
}


export default Tag;