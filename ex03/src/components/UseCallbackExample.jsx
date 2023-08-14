import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);
  const countRender = useRef(0);

  // useMemo 와의 차이는 값을 넘겨주는지 함수를 넘겨주는지의 차이
  // number 값이 변화가 없으니 콜백 함수가 생성되지 않음
  const someFunction = useCallback(() => {
    console.log('함수가 생성되었습니다.', {number});
    return;
  }, [number]);
 
  useEffect(() => {
    countRender.current += 1;
    console.log('함수가 새롭게 생성되었습니다.', countRender.current);
  }, [someFunction])

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() => setToggle(!toggle)}>
        {toggle.toString()}
      </button>
      <button onClick={someFunction}>Call someFunction</button>
    </div>
  )
}

export default UseCallbackExample