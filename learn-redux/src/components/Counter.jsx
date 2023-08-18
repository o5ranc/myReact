import React from 'react'

const Counter = ({number, diff, onIncrease, onDecrease, onSetDiff}) => {
  const onChange = e => {
    console.log("onChange : ",parseInt(e.target.value));
    onSetDiff(parseInt(e.target.value, 10));
  }

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type='number' value={diff} min="1" onChange={onChange}></input>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}

export default Counter;