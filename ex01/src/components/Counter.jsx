import React, { useState } from 'react';

// function Counter() {
//   return (
//     <div>
//       <h1>0</h1>
//       <button>+1</button>
//       <button>-1</button>
//     </div>
//   )
// }

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onPlus = () => {
    setNumber(number + 1);
  }

  const onMinus = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onPlus}> +1 </button>
      <button onClick={onMinus}> -1 </button>
    </div>
  )
}

export default Counter