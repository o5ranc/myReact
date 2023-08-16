import './App.scss';
import Board from './pages/Board'

const DUMMY_VALUE = [
  { id: 1, value: null},
  { id: 2, value: null},
  { id: 3, value: null},
  { id: 4, value: null},
  { id: 5, value: null},
  { id: 6, value: null},
  { id: 7, value: null},
  { id: 8, value: null},
  { id: 9, value: null}
]

function App() {
  return (
    <div className="App">
      <h1>Ran's Tic Tac Toe</h1>
      <Board dataList={DUMMY_VALUE}/>
    </div>
  );
}

export default App;