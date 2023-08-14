import React, {useState, useRef} from 'react'
import { useEffect } from 'react';

const Box = ({boxStyle}) => {
  const [style, setStyle] = useState();
  const countRender = useRef(0);

  useEffect(() => {
    countRender.current += 1;
    console.log('박스사이즈 함수가 생성됨. ', countRender.current);
    setStyle(boxStyle);
  }, [boxStyle]);

  return (
    <div>
      <div style={style}></div>
    </div>
  )
}

export default Box