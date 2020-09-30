import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import useStyles from './navigationbar.styles';


function NavigationBar() {
  const styles = useStyles();

  return(
        <AppBar position="static" color="default" elevation={0} className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={styles.toolbarTitle}>
            Remote<b>First</b>
          </Typography>
          <nav>
              <RouterLink to="/home" variant="button" color="textPrimary" href="#" className={styles.link}>
                Home
                </RouterLink>
            <RouterLink to="/create-job" variant="button" color="textPrimary" href="#" className={styles.link}>
                Post a Job!
              </RouterLink>
            <RouterLink to="/upload-jobs" variant="button" color="textPrimary" href="#" className={styles.link}>
                Upload jobs
              </RouterLink>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={styles.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
}

export default NavigationBar;