import { Component, createSignal, onMount } from "solid-js";
import Table from "../components/common/Table";
import { Column } from "../components/common/Table";

const EmployeeList: Component = () => {
  const [employees, setEmployees] = createSignal([]);
  const [loading, setLoading] = createSignal(true);

  const columns: Column[] = [
    {
      field: "employeeId",
      headerName: "ID",
      width: "100px",
    },
    {
      field: "name",
      headerName: "Name",
      width: "200px",
    },
    {
      field: "department",
      headerName: "Department",
    },
    {
      field: "position",
      headerName: "Position",
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <span
          class={`px-2 py-1 text-xs font-medium rounded-full ${
            params.status === "Active"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {params.status}
        </span>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <div class="flex space-x-2">
          <button
            onClick={() => handleEdit(params)}
            class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(params)}
            class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (employee: any) => {
    // Handle edit logic
  };

  const handleDelete = (employee: any) => {
    // Handle delete logic
  };

  onMount(async () => {
    try {
      // Fetch data example
      const response = await fetch('/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div class="p-4">
      <div class="mb-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
          Employee List
        </h1>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          Add Employee
        </button>
      </div>

      <Table
        columns={columns}
        data={employees()}
        loading={loading()}
        onRowClick={(row) => console.log('Row clicked:', row)}
      />
    </div>
  );
};

export default EmployeeList; 