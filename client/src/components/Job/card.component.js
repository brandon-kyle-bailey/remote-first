import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from './job.styles';


function CustomCard(props) {
    const job = props.job;
    const styles = useStyles();

    return(
        <Card className={styles.jobCard}>
            <div className={styles.imageWrapper}>
                <img src={job.imgUrl} className={styles.image}/>
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
                <Typography component="p" color="textPrimary" className={styles.tagsList}>
                {job.tags.map((tag) => (
                <Typography className={styles.tagItem} component="a" variant="subtitle1" align="center" key={tag}>
                  <Button size="small" variant="outlined" color="primary">{tag}</Button>
                </Typography>
              ))}
                </Typography>
                <Typography component="h6" color="textPrimary">
                    Location: {job.location}
                </Typography>
            </div>
        </CardContent>
        <CardActions className={styles.jobApplyAction}>
            <div className={styles.jobApplyAction}>
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