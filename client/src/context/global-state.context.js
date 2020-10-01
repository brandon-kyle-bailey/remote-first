import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './app-reducer.context';


// Initial state
const initialState = {
  jobs: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getAllJobs = (callback, payloadeType) => {
    fetch('/api/v1/jobs/get/all')
    .then(res => res.json())
    .then(data => {
      callback({
        type: payloadeType,
        payload: data
      })
    }).catch(err => console.log(err));    
  }

  useEffect(() => {
    getAllJobs(dispatch, 'INIT_JOBS');
  }, []);


  // Actions
  function searchJobs(searchTerm) {
    if(!searchTerm) {
      getAllJobs(dispatch, 'INIT_JOBS');
    } else {
      dispatch({type:'SEARCH_JOBS',payload: searchTerm})
    }
  }

  return (<GlobalContext.Provider 
    value={
      {
        jobs: state.jobs,
        searchJobs
      }
    }>
    {children}
  </GlobalContext.Provider>);
}
