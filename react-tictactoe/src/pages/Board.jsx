import React from 'react'
import './Board.scss'
import BoardButton from '../components/buttons/BoardButton'

const Board = ({ dataList }) => {

  const handleClick = (id) => {
    // alert(id);
    console.log('cliked posion # ', id);
  }

  return (
    <div id='BodyContainer'>
      <div className='PlayerContainer'>
        <h2>Next player : </h2>
        <div><span>&nbsp;O&nbsp;</span></div>
        <div><span>&nbsp;X&nbsp;</span></div>
      </div>
      <div>
        <div className='Row'>
          {dataList.map((data) => {
            const buttonTag = <BoardButton key={data.id} id={data.id} value={data.value} onClick={() => handleClick(data.id)}/>
            return buttonTag;
          })}
        </div>
        <div className='PlayerHistory'>sss</div>
      </div>
    </div>
  )
}

export default Board