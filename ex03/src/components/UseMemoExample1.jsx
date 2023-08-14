import React from 'react'
import {useState, useMemo} from 'react'

const hardCalculator = (number) => {
  let now = Date.now();
  let start = now;

  while(now < start + 2000) { // 2초 기다린 효과
    now = Date.now();
  }

  console.log('어려운 계산기...');
  return number + 1000;
}

const easyCalculator = (number) => {
  console.log('쉬운 계산기...');
  return number + 1;
}

const UseMemoExample1 = () => {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  console.log('easyCalculator 함수 계산 호출');
  // const easySum = easyCalculator(easyNumber);
  const easySum = useMemo(() => easyCalculator(easyNumber), [easyNumber]);
  console.log('hardCalculator 함수 계산 호출');
  //const hardSum = hardCalculator(hardNumber);
  const hardSum = useMemo(() => hardCalculator(hardNumber), [hardNumber]);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))}/>
      <span> + 1000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))}/>
      <span> + 1 = {easySum}</span>
    </div>
  )
  }

export default UseMemoExample1