import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Comp01 from './components/Comp01';
import Comp02 from './components/Comp02';
import Counter1 from './components/Counter1';
import Counter from './components/Counter1';
import Keduit from './components/Keduit';
import Wrapper from './components/Wrapper';
import Hello from './components/Hello';
import { useState } from 'react';


function Header(props) {

  console.log('props', props);

  return (
    <header>
      <h1><a href="https://www.naver.com" onClick={
        function(event) {
          event.preventDefault();
          props.onChangeMode();
        }
      }>REACT</a></h1>
      <h1><a href="/read/1">{props.title}</a></h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
       <h2>{props.title}</h2>
       {props.body}
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={
        event => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }
      }>
        <input type="text" name='title' placeholder='title'/>
        <p><textarea name="body"></textarea></p>
        <p><input type='submit' value='Create'></input></p>
      </form>
    </article>
  )
}


function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={
        event => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }
      }>
        <input type="text" name='title' placeholder='title' value={title} 
          onChange={(event) => setTitle(event.target.value)}/>
        <p><textarea name="body" value={body}
          onChange={(event) => setBody(event.target.value)}></textarea></p>
        <p><input type='submit' value='Update'></input></p>
      </form>
    </article>
  )
}


function Nav(props) {
  console.log(props);

  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={'read' + t.id}>
      <a id={t.id} href={'read' + t.id} onClick={
        event => {
          event.preventDefault();
          // props.onChangeMode(Number(event.target.id)); // == 로 비교시
          return props.onChangeMode(Number(event.target.id)); // === 로 비교시
        }
      }>{t.body}</a></li>);
  }

  return (
    <nav>
      <ol>
          {lis}
        </ol>
    </nav>
  );
}
/*
JSX 문법
0. javascript 문법과 html 함께 사용?
XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해줌
1. 클래스명이 class 가 아닌 className
2. 닫는태그 꼭 넣기
*/

function App() {
  // const mode = useState('WELCOME'); 에러남
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  console.log('mode', mode);

  const [topics, setTopics] = useState([
    {id: 1, title: 'html', body: 'html is .......'},
    {id: 2, title: 'css', body: 'css is .......'},
    {id: 3, title: 'javascript', body: 'javascript is .......'}
  ]);

  const name = 'react';
  const style1 = {
    backgroundColor: 'black',
    color: 'aqua',
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  let content = null;
  let contextControl = null;

  if(mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, Web!!'></Article>
  } else if(mode === 'READ') {
    
    let title, body = null;
    for(let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      // if(topics[i].id == id) { // 1 과 '1'을 같게 봄
      if(topics[i].id === id) { // 1 과 '1'을 다르게 봄
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <><li><a href={'/update/' + id} onClick={(event) => {
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type='button' value='Delete' onClick={() => {
        const newTopics = [];
        for(let i = 0; i < topics.length; i++) {
          if(topics[i].id !== id) { // 일치하는것 빼고 나머지 모두 push하므로 삭제 효과
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }}></input></li>
      </>

  } else if(mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {id: nextId, title: _title, body: _body}
      const newTopics = [...topics];
      newTopics.push(newTopic); // 새로운 topic을 추가하고
      setTopics(newTopics); // settopic에 변경된 topics값을 넣어줘 변화 감지
      setMode('CREATE');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if(mode === 'UPDATE') {
    let title, body = null;
    for(let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      // if(topics[i].id == id) { // 1 과 '1'을 같게 봄
      if(topics[i].id === id) { // 1 과 '1'을 다르게 봄
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Update title={title} body={body} 
      onUpdate={(title, body) => {
        const updateTopic = {id: id, title:title, body:body};
        const newTopics = [...topics]; // 객체가 들어있는 배열이라서 복제때에도 배열로 묶기

        for(let i = 0; i < newTopics.length; i++) {
          if(newTopics[i].id === id) {
            newTopics[i] = updateTopic;
            break;
          }
        }
        setTopics(newTopics);
      }
    }></Update>
  }

  return (
    <>
      { /* 주석은 이렇게 */ }
      { /* 중괄호로 감싸지 않으면??? 웹 페이지 화면에 표시됨*/ }
      <Header title="REACT" onChangeMode={function() {
        //alert('Header');
        // mode = 'WELCOME'; 아래처럼 변경 필요
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        //alert(id);
        //mode = 'READ'; // 아래처럼 변경 필요
        setMode('READ');
        setId(id);
      }}></Nav>
      {content}
      {/* 
      <Article title="Hi~~~~~" body="React dhghghghghgh"/>
      
      <Nav topics={topics}></Nav>
      <div style={style1}>{name}</div>
      <div className='gray-box'></div>
      // 위는 내부컴포넌트, 아래는 외부 컴포넌트 가져와서 쓰기 
      <Student/>
      <br/>
      <Comp01/>
      <br/>
      <Comp02/>
      <br />
      <Wrapper>
        <Hello color="green" name="React" favoritNumber={5}/>
        <Hello color="blue" />
        <Hello name={100} color="pink"/>
      </Wrapper>
    */}
     {/*} <Counter1/>
      <Counter/> */ } 
      
     <ul>
        <li>
          <a href='/create' onClick={event => {
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
       {/* <li>
          <a href='/update' onClick={event => {
            setMode('UPDATE');
          }}>Update</a>
       </li> */}
       {contextControl}
     </ul>
    </>
  );
}

export default App;
