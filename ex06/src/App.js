import logo from './logo.svg';
import './App.css';
import { useDispatch, Provider, useSelector } from 'react-redux'
import {legacy_createStore as createStore} from 'redux';



function reducer(currentState, action) {
  if(currentState === undefined) {
    return { number : 1 }
  }
  const newState = { ...currentState };

  if(action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}

const store = createStore(reducer);

function App() {
  function Left1() {
    const number = useSelector(state => state.number);

    return (
      <div className='subContainer'>
        <h1>Left1 : {number}</h1>
        <Left2/>
      </div>
    );
  }
  
  function Left2() {
    const number = useSelector(state => state.number);

    return (
      <div className='subContainer'>
        <h1>Left2 : {number}</h1>
        <Left3/>
      </div>
    );
  }
  
  function Left3() {
/*     function f(state) {
      return state.number;
    }
    const number = useSelector(f); */
    const number = useSelector(state => state.number);

    return (
      <div className='subContainer'>
         <h1>Left3 : {number}</h1>
      </div>
    );
  }
  
  function Right1() {
    return (
      <div className='subContainer'>
         <h1>Right : 1</h1>
          <Right2/>
      </div>
    );
  }
  
  function Right2() {
    return (
      <div className='subContainer'>
         <h1>Right : 2</h1>
          <Right3/>
      </div>
    );
  }
  
  function Right3(props) {
    const dispatch = useDispatch();
    return (
      <div className='subContainer'>
         <h1>Right : 3</h1>
         {/* <input type='button' value='+' onClick={() => {props.onIncrease()}}></input> */}
         <input type='button' value='+' onClick={() => {
            return dispatch({type:'PLUS'})
         }}></input>
      </div>
    );
  }

  
  return (
    <div className="rootContainer">
      <h1>Root : 1</h1>
      <div id='except'>
        <Provider store={store}>
          <div className='subContainer'>
            <Left1/>
          </div>
          <div className='rootContainer'>
            <Right1/>
          </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
