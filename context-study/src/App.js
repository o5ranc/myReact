import logo from './logo.svg';
import './style.css';
import { createContext, useContext } from 'react';

// themeDefault 테마를 전역적으로 사용하기 위해!!
// context에 themeDefault 라는 객체 하나를 넘겨준 상황
const themeDefault = { border: '10px solid purple'} 
const themeContext = createContext(themeDefault);

// let theme = null;
// themeContext.Provider 를 감싸면 하위에 적용됨. 단, 중간에서 새로  useContext 재정의하면 새로운 적용?? 가능한 상황.. 
// 아직 잘 모르겟음..

function App() {
  const theme = useContext(themeContext);
  console.log('theme : ', theme);

  return (
    <themeContext.Provider value={{border: '10px solid green'}}>
      <div className="root" style={theme}>
        <h1>Hello World!</h1>
        <Sub1 />
      </div>
    </themeContext.Provider>
  );
}

function Sub1()  {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{border: '10px solid orange'}}>
    <div style={theme}>
      <h1>SUB1</h1>
      <Sub2></Sub2>
    </div>
    </themeContext.Provider>
  )
}

function Sub2() {
   const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>SUB2</h1>
      <Sub3></Sub3>
    </div>
  )
}

function Sub3() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>SUB3</h1>
    </div>
  )
}

export default App;
