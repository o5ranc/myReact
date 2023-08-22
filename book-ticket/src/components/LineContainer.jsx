import React from 'react'
import styled, { css } from 'styled-components';


const StyleDiv = styled.div`
  /* 공통 스타일 */
  width: ${props => props.width};
  border: 1px solid ${props => props.lineColor || '#ECEDFC'}; ;
  background-color: ${props => props.bgColor || 'white'};
  float: ${props => props.float};
  text-align: ${props => props.isFontCenter ? 'center' : ''};
  padding: 20px;
`;

function LineContainer({ 
  children, width, lineColor, isFontCenter, bgColor, float,
  ...rest }) {
  console.log({ children }); //{children: "Button"}
  console.log({ ...rest }); //{} (빈 객체--props가 딱히 없으므로)
  return <StyleDiv 
    width={width} 
    lineColor={lineColor} 
    bgColor={bgColor} 
    isFontCenter={isFontCenter}
    {...rest}>
    {children}
  </StyleDiv>;
}


export default LineContainer