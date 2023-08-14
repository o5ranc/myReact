import React from 'react';
import MyTable from './MyTable';

const Keduit = () => {
  // const { no, name } = props.members;

  const columns = ["번호", "이름", "발사이즈"];
  const members = [
    {no: 1, name: '구상모',  foot: '222'},
    {no: 2, name: '김궁서', foot:  '111'},
    {no: 3, name: '김영란', foot:  '111'},
    {no: 4, name: '김유진', foot:  '111'},
    {no: 5, name: '김재훈', foot:  '111'},
    {no: 6, name: '김진',  foot: '111'},
    {no: 7, name: '노태종', foot:  '111'},
    {no: 8, name: '박기웅',  foot: '111'},
    {no: 9, name: '박상현', foot:  '111'},
    {no: 10, name: '안광현', foot:  '111'},
    {no: 11, name: '이한재',  foot: '111'},
    {no: 12, name: '이희태',  foot: '111'},
    {no: 13, name: '임대훈', foot: '111'}
  ];
  
  return (
    <div>
      <MyTable columns={columns} data={members}/>
      {/* { MyTable(columns,members) } */}
    </div>
  );
}

export default Keduit;