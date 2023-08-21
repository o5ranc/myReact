import React from 'react'
import BookHeader from './BookHeader';

const BookContainer = ({visible}) => {
  console.log('(BookContainer) props : ', visible);

 /*  if (!visible) return null;
  
  return (
    <div>sssssss</div>
  ) */
  return (
    <BookHeader>
      
    </BookHeader>
  );
}

export default BookContainer