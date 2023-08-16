import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useCallback} from 'react'
import { Routes, Route } from 'react-router-dom';

import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './components/NewsPage';

function App() {
  /* const sampleArticle = {
    title: '제목',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    url: 'https://www.naver.com',
    urlToImage: ''
  }

  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      setData(response.data);
    } catch(e) {
      console.log(e);
    }
  } 
  const [category, setCategory] = useState('all');
  // 렌더링 할때 한번만 호출되게
  const onSelect = useCallback(category => setCategory(category), []); 
  */

  return (
    <Routes>
      <Route path='/:category?' element={<NewsPage/>}/>
    </Routes>
  );
}

/* return (
  <div className="App">
    <div>
      <button onClick={onSelect}>불러오기</button> 
      {data && <textarea rows={8} value={JSON.stringify(data, null, 2)} readOnly />}
      <NewsItem article={sampleArticle}></NewsItem> 
      <NewsList article={sampleArticle}/> 
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </div>
  </div>
); */

export default App;
