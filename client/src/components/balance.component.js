import React, { useContext } from 'react';
import { GlobalContext } from '../context/global-state.context';

export const Balance = () => {
  const { jobs } = useContext(GlobalContext);

  const amounts = jobs.map(job => job.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}
