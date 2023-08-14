import React, { useState } from 'react'

const EventPractice = () => {
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onKeyDown = (e) => {
    if(e.key === 'Enter') onClick();
  }
  const onClick = () => {
    alert(userName + ': ' + message);
    setUserName('');
    setMessage('');
  }

  return (
    <div>
      <h1>[이벤트 연습]</h1>
      <input
        type='text'
        name='username'
        value={userName}
        placeholder='사용자명'
        onChange={onChangeUserName}
      />
      <input
        type="text"
        name='message'
        value={message}
        placeholder='아무거나 입력하세요!'
        onChange={onChangeMessage}
        onKeyDown={onKeyDown}
      />
      <button
        onClick={onClick}>확인
      </button>
    </div>
  )
}

export default EventPractice