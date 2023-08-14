import { useRef, useState, useMemo } from 'react';
import './App.css';
import EventHandling from './components/EventHandling';
import EventPractice from './components/EventPractice';
import InputSample from './components/InputSample';
// import InputSample2 from './components/InputSample2';
import UserList from './components/UserList';
// import ValidationSample from './components/ValidationSample';
import CreateUser from './components/CreateUser';
// import RefLocal from './components/RefLocal';
// import RefLocal2 from './components/RefLocal2';
import Timer from './components/Timer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username:'', email :''
  });

  const {username, email} = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id:nextId.current,
      username,
      email
    }
    setUsers([...users, user]);

    setInputs({
      username:'',email:''
    });
    nextId.current += 1;
  };

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };

  const onDelete = (id) => {
    // const deleteUser = [];
    // users.forEach(user => { 
    //   if(user.id !== id) deleteUser.push(user)}
    //   );

    // setUsers(deleteUser);

    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? {
        ...user, active: !user.active
      } : user)
    );
  }

  const [showTimer, setShowTimer] = useState(false);

  //const count = countActiveUsers(users);
  // 매번 계산하는 것을 방지
  const count = useMemo(() => {
    countActiveUsers(users);
    console.log('활성하용자 세는 중...');
  }, [users]);

  return (
    <div>
      {/* showTimer && <Timer/> 
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>*/}
      <InputSample/>
      <EventPractice></EventPractice>
      
       {/*<CreateUser username={username} email={email}
                  onChange={onChange} onCreate={onCreate}></CreateUser>
      <UserList users={users} onDelete={onDelete} onToggle={onToggle}></UserList>
      <div>사용 활성자 수 : {count}</div>
     
       <InputSample></InputSample>
      <EventHandling></EventHandling>
      <EventPractice></EventPractice>
      <InputSample2></InputSample2>
      <ValidationSample></ValidationSample> */}
      {/* <RefLocal></RefLocal>
      <RefLocal2></RefLocal2> */}
    </div>
  );
}

export default App;
