import { Component } from "solid-js";
// import { AgGridSolid } from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGridDemo: Component = () => {
  // const rowData = [
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxster", price: 72000 }
  // ];

  // const columnDefs = [
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" }
  // ];

  return (
    <div class="ag-theme-alpine dark:ag-theme-alpine-dark h-[500px] w-full">
      {/* <AgGridSolid
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={{
          sortable: true,
          filter: true
        }}
      /> */}
    </div>
  );
};

export default AgGridDemo; 