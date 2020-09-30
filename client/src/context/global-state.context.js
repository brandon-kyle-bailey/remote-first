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

  useEffect(() => {
    fetch('/api/v1/jobs/all')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'INIT_JOBS',
        payload: data
      })
  }).catch(err => console.log(err));
  }, []);


  // Actions
  function searchJobs(searchTerm) {
    dispatch({
        type:'SEARCH_JOBS',
        payload: searchTerm
      }
    )
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
