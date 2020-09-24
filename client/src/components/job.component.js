import React, {useContext} from 'react';
import { GlobalContext } from '../context/global-state.context';

export const Job = ({ job }) => {
  const { hideJob } = useContext(GlobalContext);

  const sign = job.amount < 0 ? '-' : '+';

  const handleClick = () => {
    hideJob(job.id);
  }

  return (
    <li className={job.amount < 0 ? 'minus' : 'plus'}>
      {job.text} <span>{sign}${Math.abs(job.amount)}</span><button onClick={handleClick} className="delete-btn">x</button>
    </li>
  )
}