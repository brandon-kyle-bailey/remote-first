import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/header.component';
import JobList from './components/JobList/joblist.component';
import Footer from './components/Footer/footer.component';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <JobList />
      <Footer />
    </React.Fragment>
  );
}