import React, { useState } from 'react'
import BookButton from '../../components/book/BookButton';
import BookContainer from '../../components/book/BookContainer';

const BookMainPage = () => {

  const [isVisibleBookContainer, setIsVisibleBookContainer] = useState(false);

  const onBookBtnClick = () => {
    setIsVisibleBookContainer(!isVisibleBookContainer);
  }
  
  return (
   <>
      <BookButton onClick={onBookBtnClick}/>
      <BookContainer visible={isVisibleBookContainer}/>
   </>
  )
}

export default BookMainPage