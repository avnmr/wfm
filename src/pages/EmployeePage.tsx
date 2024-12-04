import { Component, createSignal } from "solid-js";
// import { AgGrid } from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const EmployeePage: Component = () => {
  const [employees] = createSignal([
    { id: 1, name: "John Doe", department: "IT", position: "Developer", status: "Active", joinDate: "2023-01-15" },
    { id: 2, name: "Jane Smith", department: "HR", position: "Manager", status: "Active", joinDate: "2022-08-20" },
    { id: 3, name: "Mike Johnson", department: "Sales", position: "Executive", status: "On Leave", joinDate: "2023-03-10" },
    // Add more employee data...
  ]);

  const columnDefs = [
    { field: "name", headerName: "Name", filter: true },
    { field: "department", headerName: "Department", filter: true },
    { field: "position", headerName: "Position" },
    {
      field: "status",
      headerName: "Status",
      cellRenderer: (params: any) => (
        <span
          class={`px-2 py-1 text-xs font-medium rounded-full ${
            params.value === "Active"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
          }`}
        >
          {params.value}
        </span>
      ),
    },
    { field: "joinDate", headerName: "Join Date" },
    {
      headerName: "Actions",
      cellRenderer: () => (
        <div class="flex space-x-2">
          <button class="text-blue-600 hover:text-blue-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </button>
          <button class="text-red-600 hover:text-red-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Employee Management
        </h1>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add Employee
        </button>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              {columnDefs.map(col => (
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {col.headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800">
            {employees().map(emp => (
              <tr>
                {columnDefs.map(col => (
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {col.cellRenderer ? col.cellRenderer({ value: emp[col.field as keyof typeof emp] }) : emp[col.field as keyof typeof emp]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePage; 