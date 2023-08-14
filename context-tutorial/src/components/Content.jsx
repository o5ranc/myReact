import React, { useContext } from 'react'
import { ThemeConsumer } from '../contexts/ThemeContext'


const abc = () => {
  //action.setIsDark(!state.isDark)
  alert('ssss');
}
const Content = () => {
  /* return (
    <ThemeConsumer>
      {
      ({state, action}) =>
        // console.log('state : ', state)
        <div className='content'>
          <div style={{ background: state.isDark ? 'black' : 'lightgray',
            color: state.isDark ? 'white' : 'black' }}>
            홍길동님, 좋은 하루되세요.</div>
            <button className='button' onClick={abc}>
              Dark Mode
            </button>
        </div>
      }
    </ThemeConsumer>
  ) */

  const username = useContext(ThemeContext);
  
  return (
    <div className='content'>
      <div style={{
        background: state.isDark ? 'black' : 'lightgray',
        color: state.isDark ? 'white' : 'black'
      }}>
        {}, 좋은 하루되세요.</div>
      <button className='button' onClick={abc}>
        Dark Mode
      </button>
    </div>
  )
}

export default Content