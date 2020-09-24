import React from 'react'

import { Header } from './header.component';
import { JobList } from './job-list.component';

export const Home = () => {
    return (
        <>
        <Header />
        <div className="container">
            <JobList />
        </div>
        </>
    )
  }
  