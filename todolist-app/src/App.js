import logo from './logo.svg';
import './App.css';

import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'


function App() {
  return (
    <div className="App">
      <TodoTemplate/>
      <TodoInsert/>
    </div>
  );
}

export default App;
