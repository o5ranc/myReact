import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

// import { ColorProvider, ColorContext } from './contexts/ColorContext';
// import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import Button from './components/Button';
import Title from './components/Title';
import Message from './components/Message';
import LangContext from './contexts/LangContext';
import ColorContext from './contexts/Color';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';
import Page from './components/Page';

function App() {
  /* const [lang, setLang] = useState('en');

  const onToggleLang = () => {
    const changeLang = lang === 'en' ? 'kr' : 'en';
    setLang(changeLang);
  } */

  const [isDark, setIsDark] = useState(false);

  return (
   <div>
      {/* <LangContext.Provider value={lang}>
        {/* <Button lang={lang} onToggleLang={onToggleLang}></Button>
        <Title lang={lang}/>
        <Message lang={lang}/>
        LaongContext 만들어 lang 선언해서 아래처럼 lang props로 넘기는거 빼기
        
        <Button onToggleLang={onToggleLang}></Button>
        <Title/>
        <Message/>
      </LangContext.Provider>
      <hr/>                 */}         

      {/* <ColorContext.Provider value={{ color: 'red' }}>
        <div>
          <ColorBox/>
        </div>
      </ColorContext.Provider> */}

      {/*
      <ColorProvider>
        <ColorBox />
        <SelectColors/>
      </ColorProvider>
      <hr></hr>
      */}
      
      {/* <Page isDark={isDark} setIsDark={setIsDark}></Page> */}

        <ThemeProvider>
          <Page/>
        </ThemeProvider>
      
   </div>
  );
}

export default App;
 