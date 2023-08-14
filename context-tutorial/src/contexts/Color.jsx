import { createContext, useState } from 'react';

// STEP1. 이번에는 객체로!
// const ColorContext = createContext({ color: 'black' });

// STEP2. 객체로 요소를 2개로 넘겨보기
const Color = createContext({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: () => {}, 
    setSubColor: () => {}
  }
});

/*
props 속성 예시
1. String/Number/Boolean Props
2. Function(이벤트 처리나 콜백 함수를 구현) Props
3. Object Props(여러 속성을 그룹화하거나 구조화된 데이터를 전달)
4. Array Props(배열을 전달하여 리스트나 여러 아이템을 map 사용해서 렌더링하는 데 사용)
5. Custom Props 이름을 정의해서 사용
*/
const ColorProvider = ({children}) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');
  const value = {
    state: {color, subColor},
    actions: {setColor, setSubColor}
  }

  return (
    <Color.Provider value={value}>
      {children} {/* provider 속성으로 value를 주면서 그 value를 children에 넘겨주는 구조 */}
    </Color.Provider>
  )
}

// 첫번째 줄을 바로아래 두번째 줄로 변경, 같은 구문???
// const ColorConsumer = ColorContext.Consumer;
const { Consumer: ColorConsumer } = Color;

export { ColorProvider,  ColorConsumer};

export default Color; 