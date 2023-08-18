import React from "react";
import Employee from "./Emplyee";

const Comp01 = () => {
  const employee  = {no:'202301', name:'홍길동', dept:'마케팅'};
  const employee1 = {no:'202302', name:'강길동', dept:'인사'};
  
  return (
    <div>
      <h1>props 란</h1>
      <Employee emp={employee}></Employee>
      <hr />
      <Employee emp={employee1}></Employee>
    </div>
  );
};

export default Comp01;