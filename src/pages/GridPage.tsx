import { Component } from "solid-js";
// import { AgGrid } from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const GridPage: Component = () => {
  // const [rowData] = createSignal([
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxster", price: 72000 },
  // ]);

  // const [columnDefs] = createSignal([
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  // ]);

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Grid Example</h1>
      <div class="ag-theme-alpine" style={{ height: "500px" }}>
        {/* <AgGrid
          rowData={rowData()}
          columnDefs={columnDefs()}
        /> */}
      </div>
    </div>
  );
};

export default GridPage; 