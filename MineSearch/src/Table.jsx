import React, { memo, useContext } from "react";
import { TableContext } from "./MineSearch.jsx";
import Tr from "./Tr.jsx";

const Table = memo(() => {
  console.log("table?");
  const { tableData } = useContext(TableContext);
  return (
    <table>
      {Array(tableData.length)
        .fill(0)
        .map((tr, i) => {
          return <Tr rowIndex={i} />;
        })}
    </table>
  );
});

export default Table;
