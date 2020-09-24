import React, {useState, useContext} from 'react'

import { GlobalContext } from '../context/global-state.context';


export const AddJob = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addJob } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newJob = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addJob(newJob);
    setText("");
    setAmount(0);
  }

  return (
    <>
      <h3>Add new job</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add job</button>
      </form>
    </>
  )
}
