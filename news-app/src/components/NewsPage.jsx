import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = () => {
let {category} = useParams();
  console.log('[NewsPage] category : ', category);
  
  if(!category) {
    category = 'all';
  }
 
  return (
    <div>
      <Categories />
      <NewsList category={category}/>
    </div>
  )
}

export default NewsPage