import { createStore } from 'redux'

// 초기값
const initState = {
  counter: 0,
  text: '',
  list: []
};

// 액션타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션함수 정의
function increase() {
  return {
    type: INCREASE
  };
}

const decrease = () => ({
  type: DECREASE
})

const changeText = text => ({
  type: CHANGE_TEXT,
  text
})

const addToList = () => ({
  type: ADD_TO_LIST,
  item
})

// 리듀서 만들기
function reducer(state = initState, action) {
  switch(action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default:
      return state;
  } 
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log('(listener) state : ', state);
}

const unsubscribe = store.unsubscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id:1, text: '와우'}));