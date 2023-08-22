import React from 'react'
import styled from 'styled-components'

import LineContainer from '../../components/LineContainer';
import BookTitle from '../../components/book/BookTitle';
import './ChangeDatePage.css'
import theme from '../../styles/theme';

const ChangeDatePage = () => {
  return (
    <div className='changeDateContainer'>
      <div className='topContainer'>
        <LineContainer width='40%' isFontCenter={true}>
          <BookTitle isBottomLine>날짜선택</BookTitle>
        </LineContainer>
        <LineContainer width='30%' isFontCenter={true}>
         <BookTitle isBottomLine>회사선택</BookTitle>
        </LineContainer>
        <LineContainer width='30%' isFontCenter={true}>
          <BookTitle isBottomLine>잔여석</BookTitle>
          <ul>
            <li>
              <span className='textLeft'>전체</span><span className='textRight'>234석</span></li>
            <li><span className='textLeft'>전체</span><span className='textRight'>234석</span></li>
          </ul>
        </LineContainer>
      </div>
    </div>
  )
}

export default ChangeDatePage