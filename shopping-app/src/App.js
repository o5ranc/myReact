import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useState } from 'react'

import logo from "./logo.svg";
import "./App.css";
import Product from './components/Product';
import Detail from './components/Detail'
import shose from './data';
import Cart from './components/Cart';
import Title2 from './components/Title2'

const Title = () => {
  const csst1 = {
    marginTop: '70px',
    textAlign: 'center',
  }

  return (
    <>
      <h3 style={csst1}>MD's Pick</h3>

    </>
  );
}

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState(shose);

  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     {/*  
     위 실제 Nav 메뉴에 링크 거는 방법으로 변경위해서 주석
     <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link> 
      */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="slider"></div>
              <Title/>
              <Button variant='outline-primary' onClick={() => {
                console.log('before : ', data);
                let data1 = [...data].sort((a, b) => a.title > b.title ? 1 : -1,);
                console.log('after : ', data1);
                setData(data1);
              }}>이름순 정렬</Button>{'  '}
              <Button variant='outline-secondary'>낮은가격순 정렬</Button>{'  '}
              <Button variant='outline-secondary'>높은가격순 정렬</Button>{'  '}
              <div className="container">
                <div className="row">
                  {data.map((a, i) => {
                    console.log("[App] data a, i : ", a, i);
                    return <Product data={data[i]} key={data[i].id} />;
                  })}
                </div>
              </div>
              <Title2/>
            </div>
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail data={shose}/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<Member/>}></Route>  
          <Route path="location" element={<Location/>}></Route>  
        </Route>
      </Routes>
      {/* <div className='bg' style={{backgroundImage: 'url(' + bg + ')'}}></div> */}
    </div>
  );
}

function About() {
  return (
  <>
    <h4>회사 정보임</h4>
    <Outlet></Outlet>
  </>);
}

function Member() {
  return (<>Member</>);
}


function Location() {
  return (<>Location</>);
}

export default App;
