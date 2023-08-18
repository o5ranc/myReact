import React from 'react'
import PropTypes from 'prop-types'

const Hello = (props) => {
  const {color, name, favoriteNumber} = props;
  return (
    <div style={{color}}>
      <h1>안녕하세요 {name}</h1>
      <h1>좋아하는 숫자 {favoriteNumber}</h1>
    </div>
  )
}

Hello.defaultProps = {
  name : "무명씨",
  favoriteNumber : 10
}

Hello.propTypes = {
  name : PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default Hello