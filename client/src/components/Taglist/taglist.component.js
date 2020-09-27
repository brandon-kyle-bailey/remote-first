import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './taglist.styles';

import Tag from '../Tag/tag.component'


function TagList(props) {
    const tags = props.tags;
    const styles = useStyles();

    return(
        <Typography component="p" color="textPrimary" className={styles.tagsList}>
        {tags.map((tag) => (<Tag tag={tag} />))}
        </Typography>
        );
}


export default TagList;