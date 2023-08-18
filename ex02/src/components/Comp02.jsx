import React from "react";
import Employee from "./Emplyee";

const Comp02 = () => {
  const employees = [
    {no:'202302', name:'홍길동', dept:'마케팅'},
    {no:'202303', name:'강길동', dept:'인사'},
    {no:'202304', name:'박길동', dept:'영업'},
    {no:'202305', name:'이길동', dept:'연구소'},
    {no:'202306', name:  '길동', dept:'생산'},
  ];

  return(
    <div>
      <h1>배열 출력</h1>
      {employees.map((emp) => {
        return (
        <div key={emp.no}><Employee emp={emp}></Employee></div>
        )
      })}
      
      {/* {employees.map(emp => 
        <Employee emp={emp}></Employee>
      )}  */}
    </div>

    // x -> x;
  );
};

export default Comp02