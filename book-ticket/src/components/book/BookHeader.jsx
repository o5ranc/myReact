import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const headerList = [
  { step: 1, title : '날짜/회차선택' },
  { step: 2, title : '등급/좌석선택' },
  { step: 3, title : '권종/할인/매수선택' },
  { step: 4, title : '배송선택/예매확인' },
  { step: 5, title : '배송선택/예매확인' },
];

const BookHeaderWrapper = styled.div`
height: 60px;
width: 100%;
padding: 0px;
margin: 0px;
background-color: ${theme.grayColor};
`
const HeaderList = styled.ul`
height: 100%;
padding: 0;
text-align:center;
`

const HeaderListItem = styled.li`
display: inline-block;
width:20%; 
height:100%; 
margin-top: 1.3rem;
float:left;
color: white;
.active {
  background-color: ${theme.darkAccentColor};
}
`
function onHeaderClick(index) {
  console.log('[HeaderListItem] onHeaderClick index : ', index);
}

const BookHeader = () => {
  const [choosedHeader, setChoosedHeader] = useState(1);

  return (
    <BookHeaderWrapper>
      <HeaderList>
        {headerList.map((menu, index) => {
          return (
            <HeaderListItem 
              key={index} 
              onClick={onHeaderClick(index)}>{menu.title}</HeaderListItem>
          )})}
      </HeaderList>
      <Routes>
        {headerList.map((menu, index) => {
          return (
            <Route path='/books'>
              <Route path=':id?' le></Route>
            </Route>
        )})}
      </Routes>
    </BookHeaderWrapper>
  )
}

export default BookHeader