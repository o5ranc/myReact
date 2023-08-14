import React from 'react';
import LangContext from '../contexts/LangContext';

// const Title = ({lang}) => {
const Title = () => {
  // const text = lang === 'en' ? 'Context' : '먼텍스트'

  return (
    <LangContext.Consumer>
      {(lang) => {
        const text = lang === 'en' ? 'Context' : '컨텍스트'
        return <h1>{text}</h1>;
      }}
    </LangContext.Consumer>
  )
}

/*
1. LangContext.Consumer 태그 사용과 내부 중괄호 함수 선언후 return 방법
2. const 변수 선언으로 useContext 한 후 값 가져와서 그 변수를 사용 하는 방법
*/

export default Title