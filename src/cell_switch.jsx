import React, { useContext } from "react";
import { GridContext } from "./grid"; // 引入 Context

const Cell = ({ index }) => {
  const { cells, toggleCell } = useContext(GridContext);

  return (
    <div
      onClick={() => toggleCell(index)}
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid gray",
        backgroundColor: cells[index] ? "black" : "white",
        cursor: "pointer",
      }}
    />
  );
};

export default Cell;