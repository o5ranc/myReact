import React, { useState } from 'react'

const InputSample = () => {
  const [inputs, setInputs] = useState(
    { name: '', nickname: '' }
  );

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    // console.log('[onChange] name, value : ', name, value);

    // 실제 데이터 ...inputs 복제해오고 입력된 input name 속성값, value값 읽은값을 넣어줌
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onReset = () => {
    // 화면에 단지 보이는 값 변경
    setInputs({
      name: '', nickname: ''
    });
  }

  return (
    <div>
      <input name='name' onChange={onChange} value={inputs.name} placeholder='이름' />
      <input name='nickname' onChange={onChange} value={inputs.nickname} placeholder='닉네임' />
      <button onClick={onReset}>초기화</button>
      <div>
        {inputs.name} 
        {inputs.nickname !== '' ? ':' + inputs.nickname : ''}
      </div>
    </div>
  )
}

export default InputSample