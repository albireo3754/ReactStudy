import React from "react";
import Tr from "./Tr.jsx";

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => {
          return (
            <Tr
              key={`Tr${i}`}
              dispatch={dispatch}
              rowIndex={i}
              rowData={tableData[i]}
            />
          );
        })}
    </table>
  );
};

export default Table;
