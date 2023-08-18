import React, { useState, useRef } from 'react'
import './ValidationSample.css';

const ValidationSample = () => {
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(false);
  const [clicked, setClicked] = useState(false);

  // heap영역에 저장됨, 가비지컬렉팅 되기전까지 같은 메모리 참조
  // 컴포넌트는 state, props가 변경될 때마다 호출(re-rendering), 함수형 컴포넌트는 일반 함수처럼 호출될때마다 로컬 변수 초기화
  // 따라서 초기값 형태로 준 값은 계속 그 값으로 초기화 되지만 useRef 객체는 React가 만든 전역저장소에 저장되서 마지막 업데이트된 current 값 유지함
  const inputValid = useRef(null); 

  const onClick = () => {
    setClicked(true);
    setValidate(password === '0000')
    inputValid.current.focus();
  }
 
  const onChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <h1>비밀번호 검증</h1>
      <input className={clicked ? (validate ? 'success' : 'failure') : ''} 
        type="password" value={password}
        onChange={onChange}
        ref={inputValid}/>
      <button onClick={onClick}>검증하기</button>
    </div>
  )
}

export default ValidationSample