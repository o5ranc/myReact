import './TodoTemplate.css'

const TodoTemplate = ({childern}) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정 관리</div>
      <div className='content'>{childern}</div>
    </div>
  )
}

export default TodoTemplate