import React from "react";

import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from './store';
import { up } from './counterSlice';

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
      <button onClick={() => dispatch(up(2))}>+</button> {count}
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