import React, { useEffect, useRef, useState } from "react";
import './Table.css'

const TableDND = ({setCreateElement}) => {
  const tableOptionsRef = useRef();

  const [tableData, setTableData] = useState({
    row: 0,
    column: 0
  });
  const [tableInput, setTableInput] = useState(
    Array.from({ length: 6 }, () =>
      Array.from({ length: 6 }, (v, i) => ({
        bg: "black",
        column: i
      }))
    )
  );
  useEffect(() => {
    const newTable = Array.from({ length: 6 }, (obj, row) =>
      Array.from({ length: 6 }, (v, col) => ({
        bg:
          row + 1 <= tableData.row && col + 1 <= tableData.column
            ? "orange"
            : "black",
        column: col
      }))
    );
    setTableInput(newTable);
  }, [tableData]);
  return (
    <div ref={tableOptionsRef} className="popup">
      {tableData.row >= 1 && (
            <div>
              <i>{`${tableData.row} x ${tableData.column}`}</i>
            </div>
          )}
      <div className="table-input">
            {tableInput.map((grp, row) =>
              grp.map(({ column, bg }) => (
                <div
                  onClick={()=>{
                    console.log("click")
                    setCreateElement(`CHART ${row+1} ${column+1}`)
                  }}
                  onMouseOver={() =>
                    setTableData({ row: row + 1, column: column + 1 })
                  }
                  className="table-unit"
                  style={{ border: `1px solid ${bg}`,marginTop:"3px"}}
                ></div>
              ))
            )}
          </div>
        
    </div>
  );
};

export default TableDND;
