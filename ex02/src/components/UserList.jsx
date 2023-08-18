import React, { useEffect } from 'react'

const User = (props) => {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남.");
    return () => {
      console.log("컴포넌트가 화면에 사라짐.");
    }
  }, []);
  
  return(
    <div>
      <b style={{
        cursor: 'pointer',
        color : props.user.active ? 'green' : 'black'
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