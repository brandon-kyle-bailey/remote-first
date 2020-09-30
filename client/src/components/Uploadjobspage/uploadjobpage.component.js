import React from 'react';

import Header from '../Header/header.component';
import Footer from '../Footer/footer.component';
import UploadJobForm from '../Uploadjobform/uploadjob.component';

function UploadJobsPage() {
    return (
        <>
        <Header />
        <UploadJobForm />
        <Footer />
        </>
    );
}

export default UploadJobsPage;