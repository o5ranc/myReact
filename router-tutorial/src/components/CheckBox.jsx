import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import style from './CheckBox.module.css';


const CheckBox = ({children, checked, ...rest}) => {
  /* 
  모듈 활용 전 속성 적용
  return (
    <div>
      <label>
        <input type='checkbox' checked={checked} {...rest}></input>
      </label>
      <span>{children}</span>
    </div>
  )
  */
  
    //모듈 활용한 속성 주는 방법
    // class="CheckBox_checkbox__mQ--d" 와 같이 자동으로 클래스명이 붙으면서 중복 방지
    return (
    <div className={style.checkbox}>
      <label>
        <input type='checkbox' checked={checked} {...rest}></input>
        <div className={style.icon}>{
          checked ? <MdCheckBox className={style.checked}/> : <MdCheckBoxOutlineBlank/>
        }
        </div>
      </label>
      <span>{children}</span>
    </div>
  ) 
}

export default CheckBox