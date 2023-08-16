import React from 'react'
import NewsItem from './NewsItem'
import './NewsList.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

/* const sampleArticle = {
  title: '제목',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  url: 'https://www.naver.com',
  urlToImage: ''
} */

const NewsList = ({category}) => {
  // 아래처럼 promise 선언된 다른 파일 호출로 변경 후
  const [loading, response, error] = usePromise(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=kr';
    const query = category === 'all' ? '' : '&category=' + category;
    const apiKey = '&apikey=8044e094c0d445e497e559590917711b';
    return axios.get(url + query + apiKey);
  }, [category])

    
  //const [articles, setArticles] = useState(null);
  //const [loading, setLoading] = useState(false);

  // 아래처럼 promise 선언된 다른 파일 호출로 변경 전
  //useEffect (() => {
    //const fetchData = async() => {
    //  setLoading(true);
    //  try {
    //    const url = 'https://newsapi.org/v2/top-headlines?country=kr';
    //    const query = category === 'all' ? '' : '&category=' + category;
    //    const apiKey = '&apikey=8044e094c0d445e497e559590917711b';
    //    /* const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apikey=8044e094c0d445e497e559590917711b'); */
    //    const response = await axios.get(url + query + apiKey);
    //    setArticles(response.data.articles);
    //  } catch(e) {
    //    console.log(e);
    //  }
    //  setLoading(false);
    //}
    //fetchData();
   
  // }, [category]);


  if(loading) {
    return <div className='newsListBlock'>data loading....</div>
  }

  if(!response) {
    return null;
  }

  if(error) {
    return <div className='newsListBlock'>에러발생!!!</div>
  }

  const articles = response.data;

  if(!articles) {
    return null;
  }

  return (
    <div className='newsListBlock'>
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}
      {articles && articles.map((article) => {
        console.log('[NewsList] article : ', article);
        return <NewsItem article={article} />
      })}
    </div>
  )
}

export default NewsList