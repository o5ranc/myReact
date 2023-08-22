import React from 'react'
import styled from  'styled-components'

import LineContainer from '../../components/LineContainer';
import './ChangeDatePage.css'
import theme from '../../styles/theme';


const Line = styled.hr`
  border: 1px bold ${theme.test.testColor};
`;

const ChangeDatePage = () => {
  return (
   <div className='changeDateContainer'>
       <div className='topContainer'>
          <LineContainer width='40%' isFontCenter={true}>
            <div className='subTitle'>날짜선택</div>
            <Line/>
          </LineContainer>
          <LineContainer width='30%' isFontCenter={true}>
            <div className='subTitle'>회사선택</div>
            <Line/>
            </LineContainer>
            <LineContainer width='30%' isFontCenter={true}>
             <div className='subTitle'>잔여석</div>
             <Line/>
          </LineContainer>
       </div>
   </div>
  )
}

export default ChangeDatePage