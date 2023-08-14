import React from 'react'
import './Button.scss';
import classNames from 'classnames'

// const Button = ({ children, size, color, outline, fullWidth, onClick, onMouseMove }) => {
const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
  return (
    <>
      {/* <button className={['Button', size].join(' ')}>{children}</button> */}
      {/*  <Button className='button'>{children}</Button>
        <Button className='button large'>{children}</Button>
        <Button className='button smaill'>{children}</Button> */}
      {/* <Button className={classNames('')}>{children}</Button> */}

      {/* size 도 넘길수 있게 아래처럼 추가 함 */}


      {/* <button className={classNames('Button', size, color, { outline, fullWidth })}
        onClick={onClick}
        onMouseMove={onMouseMove}>{children}</button> */}
      <button className={classNames('Button', size, color, { outline, fullWidth })}
        {...rest}
      >{children}</button>
    </>
  )
}

Button.defaultProps = {
  size: 'medium'
};

export default Button