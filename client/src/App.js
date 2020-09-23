import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './components/test.component';
import JobForm from './components/job-form.component';


function App() {
  return (
    <div className="App">
      <Test />
      <JobForm/>
    </div>
  );
}

export default App;
