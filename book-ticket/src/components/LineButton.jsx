import React from 'react'
import styled from 'styled-components';

const StyleButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
`;

function LineButton({ children, ...rest }) {
  console.log({ children }); //{children: "Button"}
  console.log({ ...rest }); //{} (빈 객체--props가 딱히 없으므로)
  return <StyleButton {...rest}>{children}</StyleButton>;
}


export default LineButton