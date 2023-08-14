import React, {useState} from 'react'
import Box from './Box'
import { useCallback } from 'react';

const BoxSize = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // 변경전
  /*
  const boxStyle = () => {
    return {
      backgroundColor: 'pink', width: `${size}px`, height: `${size}px`, marginTop: '5px'}
  }
  */
   // 변경후(배경색변경때에는 반응없게,  size 변경시에만 반응되게)
   const boxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink', width: `${size}px`, height: `${size}px`, marginTop: '5px'}
  }, [size]);

  return (
    <div style={{background: isDark? 'black' : 'white'}}>
      <input type='number' value={size} step={100} onChange={(e) => setSize(e.target.value)}/>
      <button onClick={() => setIsDark(!isDark)}>배경색 변경</button>
      <Box boxStyle={boxStyle}/>
    </div>
  )
}

export default BoxSize