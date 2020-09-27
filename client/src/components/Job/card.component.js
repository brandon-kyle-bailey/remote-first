import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


function customCard(props) {
    const classes = props.classes;
    const job = props.job;

    return(
        <Card className={classes.jobCard}>
            {/* <CardMedia
                className={classes.media}
                component="img" 
                src={job.imgUrl}
                title='description goes..'>
                </CardMedia> */}
            <img src={job.imgUrl} width="350px" height="175px"/>
        <CardContent className={classes.jobCardBody}>
            <div id="position_and_company" className={classes.positionAndCompany}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    {job.position}
                </Typography>
                <Typography component="h6" variant="h6" color="textPrimary">
                    {job.company}
                </Typography>
            </div>
            <div id="desc_and_salary" className={classes.descriptionAndSalary}>
                <Typography component="p" color="textPrimary">
                    {job.description.substring(0, 200)}...
                </Typography>
                <Typography component="h5" color="textPrimary">
                    ${job.salary}
                </Typography>
            </div>
            <div id="tag_and_location" className={classes.tagAndLocation}>
                <Typography component="p" color="textPrimary" className={classes.tagsList}>
                {job.tags.map((tag) => (
                <Typography className={classes.tagItem} component="a" variant="subtitle1" align="center" key={tag}>
                  <Button size="small" variant="outlined" color="primary">{tag}</Button>
                </Typography>
              ))}
                </Typography>
                <Typography component="h6" color="textPrimary">
                    Location: {job.location}
                </Typography>
            </div>
        </CardContent>
        <CardActions className={classes.jobApplyAction}>
            <div className={classes.jobApplyAction}>
            <Button fullWidth color="primary" size="large" variant="outlined">
                Apply
            </Button>
            <Link color="textPrimary" href="#" className={classes.link}>
              More jobs like this...
            </Link>
            </div>
        </CardActions>
        </Card>
    );
}

export default customCard;