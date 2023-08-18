import React from "react";

const KeduitTable = (props) => {
  const {no, name, company} = props.kt;
  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{company}</td>
    </tr>
  )
};

export default KeduitTable;