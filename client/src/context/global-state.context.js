import React, { createContext, useReducer } from 'react';
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

  // Actions
  function hideJob(id) {
    dispatch({
      type: 'HIDE_JOB',
      payload: id
    });
  }

  function addJob(job) {
    dispatch({
      type: 'ADD_JOB',
      payload: job
    });
  }

  return (<GlobalContext.Provider value={{
    jobs: state.jobs,
    hideJob,
    addJob
  }}>
    {children}
  </GlobalContext.Provider>);
}
