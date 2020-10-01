import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';

import useStyles from './uploadjob.styles';

function UploadJobForm() {
    const styles = useStyles();

    return (
        
        <form action="/api/v1/jobs/post/all" enctype="multipart/form-data" method="post">
            <div class="form-group">
                <input type="file" class="form-control-file" name="uploaded_file"/>
                <input type="submit" value="Get me the stats!" class="btn btn-default"/>
            </div>
        </form>

        // <Typography variant="subtitle1" color="textSecondary" align="center">
        //     <Typography variant="h5" color="textSecondary" align="center" gutterBottom paragraph>
        //         Select a JSON (Javascript Object Notation) document of jobs to upload.
        //     </Typography>
        //     <form className={styles.uploadJobForm} noValidate autoComplete="off">
        //     <Button variant="contained" component="label">
        //         Choose a JSON File
        //         <input type="file" style={{ display: "none" }} onChange={handleChange}/>
        //     </Button>
        //     <FormLabel className={styles.uploadJobFormFileLabel}>{uploadFile ? uploadFile.name : "No file selected"  }</FormLabel>
        //     <Button
        //         variant="contained"
        //         onClick={handleUpload}
        //     >
        //     Upload file
        //     </Button>
        //     </form>
        // </Typography>
    );
}

export default UploadJobForm;