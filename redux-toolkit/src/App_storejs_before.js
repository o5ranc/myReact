import React from "react";

import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'

/* 
toolkit 사용전 사용 방법
function reducer(state = initialState, action) {
  if(action.type === 'up') { 
    //return state;
    return {
      ...state,
      value: state.value + action.step
    }
  }
  return state;
}

const initialState = { value: 0 };
const store = createStore(reducer); */

/*
toolkit 사용후 사용법 
*/
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {value:0},
  reducers: {
    up: (state, action) => {
      console.log('(counterSlice) action : ', action);
      // state.value += action.step;
      // toolkit 변경시 action에 전달 되는 데이터는 payload 값으로 넘어온 값을 읽음
      state.value += action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer 
    // counter1: counterSlice.reducer 이름 변경해도 문제 없이 동작함
  }
});

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state =>{
    console.log('(Counter) state : ', state);
    // return state.counter.value; 
    return state.counter.value; // toolkit으로 변경되면서 state.value 가 아닌 state.counter.value 로 접근
  });
  return (
    <div>
      {/* toolkit 사용하는 방법 변경 
          주의 1. dispatch의 type 명과 slice 만들때 reducers 내부의 명칭 맞추기
               2. dispatch의 type 명칭 표기 방식이 변경됨 */}
      {/*  <button onClick={() => dispatch({ type: "up", step: 2 })}>+</button> {count} */}
      {/* <button onClick={() => dispatch({ type: 'counterSlice/up', step: 2 })}>+</button> {count} */}
      <button onClick={() => dispatch(counterSlice.actions.up(2))}>+</button> {count}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
