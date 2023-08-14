import React from 'react';
import Employee from './Employee';

const Comp02 = () => {
  const employees = [
    {no: '202301', name: '홍길동', dept: '마케팅'},
    {no: '202302', name: '장충동', dept: '인사팀'},
    {no: '202303', name: '김사번', dept: '전자부'},
    {no: '202304', name: '삼부서', dept: '디자인팀'},
    {no: '202305', name: '일분단', dept: '개발팀'},
    {no: '202306', name: '일기장', dept: '회계팀'}
  ]

  return (
    <div>
      <h1>배열 출력</h1>
      { employees.map(emp => {
        /* 중괄호 하면 return 으로 태그를 보내줘야하고 */
        return <Employee emp={emp}/>
      })}
    </div>
  );
}

export default Comp02;