import React, { useState } from 'react'
import './CheckBooksPage.css'

const CheckBooksPage = () => {
  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    email: ''
  })

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <p>수령방법</p>
      <div>
        <p>티켓</p>
        <button>현장수령</button>
      </div>
      <form action="">
        <input 
          value={values.name} 
          placeholder='이름'
          onChange={handleChange}></input>
         <input 
          value={values.phoneNumber} 
          placeholder='전화번호'
          onChange={handleChange}></input>
            <input 
          value={values.email} 
          placeholder='이메일'
          onChange={handleChange}></input>
      </form>
      <p>예매자 확인</p>
      
      
      </>
  )
}

export default CheckBooksPage