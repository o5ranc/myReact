import React from 'react'
import './Categories.css'
import { NavLink } from 'react-router-dom'

const categoreis = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainmant', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
]
/* 
const Categories = ({ category, onSelect }) => { */
const Categories = () => {
  return (
    <div className='categoriesBlock'>
      {categoreis.map(c => (
       /*  <div className='category' key={c.name} onClick={() => onSelect(c.name)}> */
        <div className='category' key={c.name}>
          {/* <span className={category === c.name ? 'active' : ''}>{c.text}</span> */}
         {/*  <NavLink className={({isActive}) => isActive ? 'active' : undefined} */}
          <NavLink to={c.name === 'all' ? '/' : '/' + c.name}>
            {c.text}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Categories