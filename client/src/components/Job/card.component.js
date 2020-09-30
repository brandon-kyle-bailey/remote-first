import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from './job.styles';

import TagList from '../Taglist/taglist.component';


function CustomCard(props) {
    const job = props.job;
    const styles = useStyles();
    const daysOld = Math.floor((new Date().getTime() - new Date(job.creationTime).getTime()) / (1000 * 3600 * 24));

    return(
        <Card className={styles.jobCard}>
            <div className={styles.imageWrapper}>
                <img src={job.imgUrl} className={styles.image} alt=""/>
            </div>
        <CardContent className={styles.jobCardBody}>
            <div id="position_and_company" className={styles.positionAndCompany}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    {job.position}
                </Typography>
                <Typography component="h6" variant="h6" color="textPrimary">
                    {job.company}
                </Typography>
            </div>
            <div id="desc_and_salary" className={styles.descriptionAndSalary}>
                <Typography component="p" color="textPrimary">
                    {job.description.substring(0, 200)}...
                </Typography>
                <Typography component="h5" color="textPrimary">
                    ${job.salary}
                </Typography>
            </div>
            <div id="tag_and_location" className={styles.tagAndLocation}>
                <TagList tags={job.tags}/>
                <Typography component="h6" color="textPrimary">
                    Location: {job.location}
                </Typography>
            </div>
        </CardContent>
        <CardActions className={styles.jobApplyAction}>
            <div className={styles.jobApplyAction}>
            <Typography component="p" variant="subtitle2" color="textPrimary" align="center">
                {daysOld}d Ago
            </Typography>
            <Button fullWidth color="primary" size="large" variant="outlined">
                Apply
            </Button>
            <Link color="textPrimary" href="#" className={styles.link}>
              More jobs like this...
            </Link>
            </div>
        </CardActions>
        </Card>
    );
}

export default CustomCard;