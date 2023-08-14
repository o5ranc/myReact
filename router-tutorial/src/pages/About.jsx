import React from 'react'
import { useLocation, useSearchParams  } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  console.log('[About] searchParams : ', searchParams);

  const onToggleDetail = () => {
    // 'true' 문자열로 넘어오므로 bool로 변환위해 조건 분기
    setSearchParams({mode, detail: !(detail === 'true' ? true : false)});
    console.log('detail : ', detail, typeof(detail));
    console.log(searchParams.get('detail'), searchParams.get('mode'));
    // return (<div></div>);
  }

  const onIncreaseMode = () => {
    // mode 가 string으로 넘어와서 계산을 위해 int 변환
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({mode: nextMode, detail: detail});
    console.log(searchParams.get('detail'), searchParams.get('mode'));
    // return (<div></div>);
  }

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <p>쿼리스트링: {location.search}</p>
      <p>현재 주소의 경로: {location.pathname}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      <p>hash: {location.hash}</p>
      <p>state: {location.state}</p>
      <p>key: {location.key}</p>
    </div>
  );
};

export default About;