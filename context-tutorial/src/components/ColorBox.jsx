import React from 'react'
import ColorContext, { ColorConsumer } from '../contexts/Color'

const ColorBox = () => {
  return (
    /*     
        // 방법1
        <ColorContext.Consumer>
          { value => {
            <div style={{width: '64px', height:'64px', background: value.color}}></div>
          }}
        </ColorContext.Consumer> */

    // 방법2
    <ColorConsumer>
      {/* { value =>  
      <div>
        <div style={{width: '64px', height:'64px', background: value.state.color}}></div>
        <div style={{width: '32px', height:'32px', background: value.state.subColor}}></div>
      </div>
    }
    */}

      {
      // 직접 state를 선언해서 사용해도 됨
      ({ state }) =>
        <div>
          <div style={{ width: '64px', height: '64px', background: state.color }}></div>
          <div style={{ width: '32px', height: '32px', background: state.subColor }}></div>
        </div>
      }
    </ColorConsumer>
  )
}

export default ColorBox