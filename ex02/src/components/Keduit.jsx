import React from "react";
import KeduitTable from "./KeduitTable";

const Keduit = () => {
  const students = [
    {no:'1', name:'김궁서',  company:'2'},
    {no:'2', name:'이희태',  company:'1'},
    {no:'3', name:'김유진',  company:'1'},
    {no:'4', name:'안광현',  company:'3'},
    {no:'5', name:'박기웅',  company:'3'},
    {no:'6', name:'이한재',  company:'2'},
    {no:'7', name:'김재훈',  company:'1'},
    {no:'8', name:'구상모',  company:'2'},
    {no:'9', name:'임대훈',  company:'3'},
    {no:'10', name:'김영란', company:'1'},
    {no:'11', name:'박상현', company:'2'},
    {no:'12', name:'김진',   company:'2'},
  ];

  return(
    <div>
      <h1>한정교 우리반</h1>
      {/* {students.map((student) => {
        return (
          <Employee emp={student}></Employee>
        )
      })}; */}

      <table id="tableName">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>조</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st) => {
            return (
              <KeduitTable key={st.no} kt={st}></KeduitTable>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Keduit;