import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => {
  const { color, name, favoritNumber } = props;

  return (
    <div style={{color}}>
      <h1>안녕하세요 {name}</h1>
      <h1>제가 좋아하는 숫자는 {favoritNumber} 입니다.</h1>
    </div>
  )
}

Hello.defaultProps = { 
  name:  "무명씨1"
}

/*
User.propTypes = {
  male: PropTypes.bool.isRequired,
  age: PropTypes.number,
  type: PropTypes.oneOf(["gold", "silver", "bronze"]),
  onChangeName: PropTypes.func,
  onChangeTitle: PropTypes.func.isRequired
}

const User = ({ type, age, male, onChangeName, onChangeTitle }) => {
*/
Hello.propTypes = {
  name: PropTypes.string,
  favoritNumber: PropTypes.number.isRequired// 타입을 확인하기 위함
}

export default Hello;