import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer.context';


// Initial state
const initialState = {
  jobs: [
    {
  imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
  position: 'job title',
  company: 'company',
  description: 'description',
  salary: 75000,
  tags: ['software', 'remote', 'python', 'google', 'web', 'test'],
  location: 'testremote',
  creationTime: '2020-09-26 00:00:00'
},
{
  imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
  position: 'Senior Full Stack Developer',
  company: 'Google',
  description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
  salary: 75000,
  tags: ['software', 'remote', 'python', 'google', 'web'],
  location: 'remote',
  creationTime: '2020-09-26 00:00:00'
},
{
  imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
  position: 'Senior Full Stack Developer',
  company: 'Google',
  description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
  salary: 75000,
  tags: ['software', 'remote', 'python', 'google', 'web'],
  location: 'remote',
  creationTime: '2020-09-26 00:00:00'
},
{
  imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
  position: 'Senior Full Stack Developer',
  company: 'Google',
  description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
  salary: 75000,
  tags: ['software', 'remote', 'python', 'google', 'web'],
  location: 'remote',
  creationTime: '2020-09-26 00:00:00'
},
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
