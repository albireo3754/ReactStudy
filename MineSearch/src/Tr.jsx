import React, { memo, useContext } from "react";
import Td from "./Td.jsx";
import { TableContext } from "./MineSearch.jsx";

const Tr = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
};

export default memo(Tr);
