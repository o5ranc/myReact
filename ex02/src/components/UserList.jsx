import React, { useEffect } from 'react'

const User = (props) => {
//const User = ({user, onRemove, onToggle}) => {
  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남.");
  //   return () => { // 내부 return 함수는 뒷 정리 함수
  //     console.log("컴포넌트가 화면에 사라짐.");
  //   }
  // }, []); // dependency array(deps)

  // useEffect(() => {
  //   console.log('user값이 설정됨', user);
  //   return () => {
  //     console.log('user가 바뀌기 전...', user);
  //   }
  // }, [user]);

  // useEffect(() => {
  //   console.log('user', user);
  // }); // 배열 적어주지 않으면 무조건 나옴

  return (
    <div>
      <b style={{
        cursor: 'pointer',
        color: props.user.active ? 'green' : 'black'
      }}
        onClick={() => props.onToggle(props.user.id)}
      >{props.user.username}</b>
      <span>{props.user.email}</span>
      <button onClick={() => props.onDelete(props.user.id)}>삭제</button>
    </div>
  )
};

// const UserList = ({users, onDelete}) => {
const UserList = (props) => {
  return (
    <div>
      {props.users.map(user => (
        <User user={user} key={user.id} onDelete={props.onDelete} onToggle={props.onToggle}></User>
      ))}
    </div>
  )
}

export default UserList