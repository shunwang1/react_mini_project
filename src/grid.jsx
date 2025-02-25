import React, { createContext, useState, useContext } from "react";
import Cell from "./cell_switch";

const GridContext = createContext();

const Grid = () => {
  const [cells, setCells] = useState([false, false, false, false]);

  const countOnCells = cells.filter(Boolean).length;

  const toggleCell = (index) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[index] = !newCells[index];
      return newCells;
    });
  };

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Active Cells: {countOnCells}</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 100px)",
            gridGap: "0px",
            justifyContent: "center",
          }}
        >
          {[0, 1, 2, 3].map((index) => (
            <Cell key={index} index={index} />
          ))}
        </div>
      </div>
    </GridContext.Provider>
  );
};

export { GridContext };
export default Grid;