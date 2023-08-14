import React from 'react'
import Button from '../components/Button'
import '../components/Button.scss'

const ScssButton = ({ childern, size }) => {
  return (
    <div className='buttonWrapper'>
      <div>
        <Button size='large' onClick={() => console.log('클릭!!')}>BUTTON</Button>
        {/* <Button size='middle'>BUTTON</Button> */}
        <Button size='small' onMouseMove={() => console.log('마우스 이동!!')}>BUTTON</Button>
      </div>
      <div>
        <Button color='pink'>BUTTON</Button>
        <Button size='middle' color='pink'>BUTTON</Button>
        <Button size='small' color='pink'>BUTTON</Button>
      </div>
      <div><Button size='small' color='orange'>BUTTON</Button></div>
      <div><Button size='small' color='pink' fullWidth>BUTTON</Button></div>
      <div><Button size='small' color='pink' outline>BUTTON</Button></div>
    </div>
  )
}

export default ScssButton