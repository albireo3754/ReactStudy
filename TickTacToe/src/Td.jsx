import React, { useCallback, useEffect, useRef, memo } from "react";
import { SET_TURN, SET_WINNER, CLICK_CELL } from "./TickTacToe.jsx";

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log(cellData, "cellData");
  const ref = useRef([]);
  useEffect(() => {
    console.log("ce", ref.current[3], "cell");
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
  }, [rowIndex, cellIndex, dispatch, cellData]);
  const onClickTd = useCallback(() => {
    console.log(rowIndex);
    if (cellData) return;
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
};

export default memo(Td);
