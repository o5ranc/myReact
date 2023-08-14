import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './pages/Layout';
import Styled from './pages/Styled';
import ScssButton from './pages/ScssButton';
import Check from './pages/Check';
import APIPage from './pages/APIPage';

function App() {
  return (
   <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about?detail=true&mode=200'>소개</Link></li>
      <li><Link to='/profiles'>프로필</Link></li>
      <li><Link to='/articles'>게시글목록</Link></li>
      <li><Link to='/styled'>스타일드컴포넌트</Link></li>
      <li><Link to='/sass'>Sass 스타일링</Link></li>
      <li><Link to='/check'>CSS Module 스타일링</Link></li>
      <li><Link to='/apipage'>API 테스트</Link></li>
    </ul>
    <hr />
    <Routes>
      {/* <Route path='/' element={'처음'}>처음으로</Route> */}
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/profile/:username' element={<Profile/>}>프로필</Route> */}
        <Route path='/profiles/*' element={<Profile/>}/>
      </Route>
      <Route path='/articles' element={<Articles/>}> {/* 부모 - 글목록 */}
        <Route path=':id' element={<Article/>}></Route> {/* 자식 - 글 id 넘겨받는 글 링크 */}
      </Route>
      <Route path='/styled' element={<Styled/>}></Route>
      <Route path='/sass' element={<ScssButton/>}></Route>
      <Route path='/check' element={<Check/>}></Route>
      <Route path='/apipage' element={<APIPage/>}></Route>
    </Routes>
   </div>
  );
}

export default App;
