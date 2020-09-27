import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import FooterObject from '../FooterObject/footerobject.component';
import Copyright from '../Copyright/copyright.component';

import useStyles from './footer.styles';

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];


function Footer() {
  const styles = useStyles();

  return(
      <Container maxWidth="md" component="footer" className={styles.footer}>
      <Grid container spacing={4} justify="space-evenly">
        {footers.map((footer, index) => (
          <FooterObject key={index} footer={footer}/>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    );
}

export default Footer;