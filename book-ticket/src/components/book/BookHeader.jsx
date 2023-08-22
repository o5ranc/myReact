import React, { useState, useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'

import theme from '../../styles/theme'

const headerList = [
  { step: 1, title : '날짜/회차선택'},
  { step: 2, title : '등급/좌석선택'},
  { step: 3, title : '권종/할인/매수선택'},
  { step: 4, title : '배송선택/예매확인'},
  { step: 5, title : '결재하기'},
];

const BookHeaderWrapper = styled.div`
height: 60px;
width: 100%;
padding: 0px;
margin: 0px;
background-color: ${theme.grayColor};
`
const HeaderList = styled.ul`
width: 100%;
height: 100%;
padding: 0;
text-align:center;
`

const HeaderListItem = styled.li`
display: inline-block;
width:20%; 
height:100%; 
color: white;
cursor:pointer;
text-decoration: none;
`
const BookHeader = ({onBookStepClick}) => {

  const handleStepClick = (index) => {
    console.log('[BookHeader] onHeaderClick index : ', index);
    onBookStepClick(index);
}

  return (
    <BookHeaderWrapper>
      <HeaderList>
        {headerList.map((menu, index) => {
          return (
            <HeaderListItem 
              key={index} 
              onClick={() => handleStepClick(index)}>
              <NavLink to={'/books/' + headerList[index].step}>{menu.title}</NavLink>
            </HeaderListItem>
          )})}
      </HeaderList>
    </BookHeaderWrapper>
  )
}

export default BookHeader