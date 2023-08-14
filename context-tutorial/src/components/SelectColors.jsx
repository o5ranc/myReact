import React from 'react'
import { ColorConsumer } from '../contexts/Color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SelectColors = () => {
  /*  return (
     <div>
       <h2>색상을 선택하세요.</h2>
       <div style={{display: 'flex'}}>
         { colors.map(color => {
           return <div key={color} style={{ background: color, width: '50px', height: '24px', cursor: 'pointer'}} />
         })
         }
       </div>
     </div>
   ) */

  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map(color => (
              <div key={color}
                style={{ background: color, width: '150px', height: '150px', cursor: 'pointer' }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}>{color}</div>
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  )
}

export default SelectColors