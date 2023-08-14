import React, { useReducer, useState } from 'react'

const Count = () => {
  // const [count, setCount] = useState(0);

  function countReducer(oldCount, action) {
    if     (action.type === 'UP') {
      return oldCount + action.number;
    }
    else if(action.type === 'DOWN') {
      return oldCount - action.number;
    }
    else if(action.type === 'RESET') {
      return 0;
    }
  };

  const [count, countDispatch] = useReducer(countReducer, 0);
  const [number, setNumber] = useState(0);

  const down = () => {
    countDispatch({
      type : "DOWN",
      number : number
    });
  };
  const reset = () => {
    countDispatch({
      type : "RESET",
      number : 0
    });
  };
  const up = () => {
    countDispatch({
      type : "UP",
      number : number
    });
  };
  const changeNumber = (e) => {
    setNumber(Number(e.target.value));
  }

  return (
    <div>
      <button onClick={down}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={up}>+</button>
      <input type='text' value={number} onChange={changeNumber}></input>
      <span> {count} </span>
    </div>
  )
}

export default Count