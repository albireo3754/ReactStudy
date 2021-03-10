import React, { memo } from "react";
import Td from "./Td.jsx";

const Tr = ({ rowData, rowIndex, dispatch }) => {
  console.log("tr");
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => {
          return (
            <Td
              key={i}
              dispatch={dispatch}
              rowIndex={rowIndex}
              cellIndex={i}
              cellData={rowData[i]}
            >
              {""}
            </Td>
          );
        })}
    </tr>
  );
};

export default memo(Tr);
