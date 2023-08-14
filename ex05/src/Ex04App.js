import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);

  function countReducer(oldCount, action) {
    switch(action.type) {
      case 'UP' :
        return oldCount + action.number;
      case 'DOWN' :
        return odCount - action.number; 
      case 'RESET' :
        return 0;
      default:
        return false;
    }
  }

  const [count, countDispatch] = useReducer(countReducer, 0)

  function down() {
    countDispatch({type: 'DOWN', number: number})
  }

  function reset() {
    countDispatch({type: 'RESET', number: number})
  }

  const Counter = () => {
    const [state, dispath] = useReducer(reducer, { value: 0 });

    return (
      <div>
        <p>
          현재 카운터 값은 <b>{state.value}</b>
        </p>
        <button onClick={() => dispath({})}></button>
      </div>
    )
  }

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
