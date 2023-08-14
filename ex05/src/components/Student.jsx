import React from 'react'

// const Student = (props) => {
const Student = ({student, dispatch}) => {
  // const [key, student, dispatch] = props;
  const {id, name, isHere} = student;

  console.log('(Student) student, dispatch : ', student, dispatch);

  return (
    <div>
      <span style={{textDecoration: isHere && 'line-through'}}
      onClick={() => dispatch({type: 'check', payload: {id:id}})}>{student.name}</span>&nbsp;&nbsp;
      <button onClick={() => dispatch({type: 'delete', payload: {id:id}})}>삭제</button>
    </div>
  )
}

export default Student