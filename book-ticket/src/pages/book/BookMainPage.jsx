import React, { useState } from 'react'

import BookButton from '../../components/book/BookButton';
import BookHeader from '../../components/book/BookHeader';
import ChangeDatePage from '../../pages/book/ChangeDatePage';
import ChooseSeatsPage from '../../pages/book/ChooseSeatsPage';
import DiscountPricePage from '../../pages/book/DiscountPricePage';
import CheckBooksPage from '../../pages/book/CheckBooksPage';
import Payment from '../../pages/book/Payment';
import BookInfoView from '../../components/book/BookInfoView'

import './BookMainPage.css'

const BookMainPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  // const [isVisibleBookContainer, setIsVisibleBookContainer] = useState(false);

  const handleBookBtnClick = () => {
    // setIsVisibleBookContainer(!isVisibleBookContainer);
    console.log('예약하기');
  }

  const handleStepClick = (index) => {
      console.log('[BookMainPage] onBookStepClick index : ', currentTab, index);
      setCurrentTab(index);
  }
  
  function TabContent() {
    switch(currentTab) {
      case 0: return <ChangeDatePage/>; break;
      case 1: return <ChooseSeatsPage/>; break;
      case 2: return <DiscountPricePage/>; break;
      case 3: return <CheckBooksPage/>; break;
      case 4: return <Payment/>; break;
      default:
        return <ChangeDatePage/>; break;
    } 
  }

  return (
   <>
      <BookButton onClick={handleBookBtnClick}/>
      <div>
        <BookHeader onBookStepClick={handleStepClick}/>
      </div>
      <div className='bookLeftContainer'>
        <TabContent/>
      </div>
      <BookInfoView/>
   </>
  )
}

export default BookMainPage