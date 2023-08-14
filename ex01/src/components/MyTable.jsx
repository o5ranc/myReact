import React from 'react';
import table from '../css/table.css'

const MyTable = ( props ) => {

  // console.log("columns : " + columns);
  // console.log(columns, data);
  return (
    <table>
      <thead>
        <tr>
           { props.columns.map((col) => (
              <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { props.data.map(({no, name, foot}) => (
          <tr key={no+name+foot}>
              <td>{no}</td>
              <td>{name}</td>
              <td>{foot}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;