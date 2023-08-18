import React, { useRef, useState } from 'react'

const RefLocal = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  console.log("렌더링......");

  const onIncreaseState = () => {
    setCount(count+1);
  }

  const onIncreaseRef = () => {
    countRef.current += 1;
    console.log("ref : " , countRef.current); 
  }
  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={onIncreaseState}>State값 증가</button>
      <button onClick={onIncreaseRef}>Ref값 증가</button>
    </div>
  )
}

export default RefLocal