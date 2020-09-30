import React from 'react';

import Header from '../Header/header.component';
import JobList from '../JobList/joblist.component';
import Footer from '../Footer/footer.component';

function JobsPage() {
    return (
        <>
        <Header />
        <JobList />
        <Footer />
        </>
    );
}

export default JobsPage;