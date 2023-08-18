import React from 'react'
import { useState } from 'react';

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const onPlus = function() {
    setCount(count+1);
  };

  const onMinus = function() {
    setCount(count-1);
  };

  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={onPlus}> +1 </button>
      <button onClick={onMinus}> -1 </button>
    </div>
  )
}

export default Counter1