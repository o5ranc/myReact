import React from 'react'
import { Link } from 'react-router-dom' 

const profiles = () => {
  return (
    <div>
      <ul>
        <li><Link to='/profile/oranc'>오란씨로</Link></li>
        <li><Link to='/profile/gildong'>홍길동으로</Link></li>
      </ul>
    </div>
  )
}

export default profiles