import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
            <Link variant="button" color="textPrimary" href="#" className={styles.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={styles.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={styles.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={styles.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
}

export default NavigationBar;