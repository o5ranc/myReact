import React, { useRef, useState } from 'react'

const RefLocal2 = () => {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);

  let countVar = 0;

  const onRendering = () => {
    setRender(render + 1);
  };

  const onIncreaseRef = () => {
    countRef.current += 1;
  }

  const onIncreaseVar = () => {
    countVar += 1;
  };

  const onPrintResult = () => {
    console.log(`ref: ${countRef.current}, var : ${countVar}`);
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={onRendering}>렌더링</button>
      <button onClick={onIncreaseRef}>Ref 증가</button>
      <button onClick={onIncreaseVar}>Var 증가</button>
      <button onClick={onPrintResult}>Ref와 Var값 출력</button>
    </div>
  )
}

export default RefLocal2