import React, { useReducer, useState } from 'react'

const UseReducerEx1 = () => {
  const [number, setNumber] = useState(0);
  const [money, moneyDispatch] = useReducer(moneyCheck,10000);

  function moneyCheck(currentMoney, action) {
    if(action.type === "ADD")  {
      return currentMoney + action.calculateMoney;
    }
    else if(action.type === "MINUS") {
      if(currentMoney - action.calculateMoney < 0) {
        alert("잔액이 적으므로 출금불가.");
        return currentMoney;
      } else {
        return currentMoney - action.calculateMoney;
      }
    } 

  }

  function moneyAdd() {
    moneyDispatch({
      type:"ADD",
      calculateMoney:number
    });
  }

  function moneyMinus() {
    moneyDispatch({
      type:"MINUS",
      calculateMoney:number
    });
  }

  return (
    <div>
      <h2>은행에 오신걸 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input type='number' value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={moneyAdd}>예금</button>
      <button onClick={moneyMinus}>출금</button>
    </div>
  )
}

export default UseReducerEx1;

/* import React, { useState, useReducer } from 'react'

const [number, setNumber] = useState(0);

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw'
}

const reducer = (state, action) => {  
  console.log('reducer가 일을 함.', state, action);
}

const UseReducerEx1 = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  
  return (
    <div>
      <h2>은행에 오신걸 환영합니다.</h2>
      <p>잔고 : {money}원</p>
      <input type="number" value={number} step={3000} 
        onChange={(e) => setNumber(parseInt(e.target.value))}/>

      {/*  dispatch 호출하면 reducer가 호출 됨 
      <button onClcick>예금</button>
      <button>출금</button>
    </div>
  )
}

export default UseReducerEx1 */