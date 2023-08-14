import React from 'react'
import styled from 'styled-components'

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

const ReactButton = props => {
  console.log('(ReactButton) props ? ', props);
  //return <button>{props.children}</button> // 적용 안됨
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 80px
`
/*
const PrimaryButton = styled.button`
  color: white;
`
아래쪽에 동적으로 적용되게 값 변경되는 버젼

const PrimaryButton = styled.button`
  color: ${function(props) {
    console.log('(PrimaryButton) props ? ', props);
    return props.primary ? 'red' : 'blue';
  }};
`

아래쪽에 더 간략화 함
*/
const PrimaryButton = styled.button`
  color: ${props => props.$primary ? 'red' : 'blue'};
  background-color: ${props => props.$primary ? 'yellow' : 'red'};
`

const Styled = () => {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React Btn</ReactButton>
      <ReactLargeButton>React L-Btn</ReactLargeButton>
      {/* props로 넘길때 속성명과 그 뒤에 'true' 값 같이 보내기 주의!! 
      <PrimaryButton primary='true'>Normal1</PrimaryButton> 
      primary='true' 속성으로 주면 콘솔 경고뜸. 
      consider using transient props (`$` prefix for automatic filtering.) 추천해서 아래처럼 변경하고
      속성에서도 쓸때 
      */}
      <PrimaryButton $primary>Normal1</PrimaryButton> 
      <PrimaryButton>Norma2</PrimaryButton>
    </div>
  )
}

export default Styled