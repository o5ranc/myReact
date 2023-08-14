import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes, Link, NavLink, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

const contents = [
  {id: 1, title: 'HTML', description: 'HTML is ...'},
  {id: 2, title: 'JS', description: 'JS is ...'},
  {id: 3, title: 'React', description: 'React is ...'}
];

function Topic() {
  const params = useParams();
  console.log(params); // {*: '3', topic_id: '3'} 결과 나옴

  const topic_id = params.topic_id;
  let selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };

  for(let i = 0; i < contents.length; i++) {
    if(contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}

function Topics() {
  let lis = [];

  for(let i = 0; i < contents.length; i++) {
    // 복제본을 쓰므로 유일한 key값을 넣어줘야 함
    lis.push(<li key={contents[i].id}><NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink></li>);
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/*<li><NavLink to='/topics/1'>HTML</NavLink></li>
        <li><NavLink to='/topics/2'>JS</NavLink></li>
        <li><NavLink to='/topics/3'>React</NavLink></li>*/}
        {lis}
      </ul>
      <Routes>
        {/*
        <Route path='/1' element={'HTML is ...'}></Route>
        <Route path='/2' element={'JS is ...'}></Route>
        <Route path='/3' element={'React is ...'}></Route>
        // 아래의 topic_id는 useParams가 주는 값?
        */}
        <Route path='/:topic_id' element={<Topic/>}></Route> 
      </Routes>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  /*
  
  */
  return (
    <div>
      <h1>Hello React Router DOM</h1>
     
      <ul>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li> 
        // 아래처럼 Link to 를 사용해서 연결하면 화면 리로딩 아닌 바뀌는부분만 업데이트 하는 방식으로 작동
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        // NavLink 로 변경 후 차이 보기
        // NavLink은 선택된 링크가 active 가 적용되어 이에대한 스타일을 주면 적용됨
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/topics/*' element={<Topics/>}></Route>{ /* /topics 정확히 일치하는것만 찾아서 '/topics/1 인식 하려면 별표 추가 */ }
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/*' element={'Not Found'}></Route>{ /* 해당 경로가 없는 경우 요기 페이지로*/ }
      </Routes>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
   //<HashRouter>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</HashRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
