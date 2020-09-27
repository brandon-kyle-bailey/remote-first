import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './tag.styles';


function Tag(props) {
    const tag = props.tag;
    const styles = useStyles();

    return(
        <Typography className={styles.tagItem} component="a" variant="subtitle1" align="center" key={tag}>
          <Button size="small" variant="outlined" color="primary">{tag}</Button>
        </Typography>
        );
}


export default Tag;