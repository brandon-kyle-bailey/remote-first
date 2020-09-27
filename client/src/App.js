import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/header.component';
import JobList from './components/JobList/joblist.component';
import Footer from './components/Footer/footer.component';

import { GlobalProvider } from './context/global-state.context';

export default function App() {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Header />
      <JobList />
      <Footer />
    </GlobalProvider>
  );
}