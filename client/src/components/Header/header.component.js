import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import NavigationBar from '../NavigationBar/navigationbar.component';

import useStyles from './header.styles';

function Header() {
  const styles = useStyles();
  return(
      <>
      <NavigationBar />
        <Container component="main" className={styles.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Remote Jobs
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          A job platform designed <b>by</b> remote workers <b>for</b> remote workers.
        </Typography>
      </Container>
    </>
    );
}

export default Header;