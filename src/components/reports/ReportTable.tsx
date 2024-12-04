import { Component, createSignal } from "solid-js";

interface ReportData {
  department: string;
  employees: number;
  attendance: string;
  productivity: string;
  overtime: string;
  satisfaction: string;
}

export const ReportTable: Component = () => {
  const [data] = createSignal<ReportData[]>([
    {
      department: "IT",
      employees: 45,
      attendance: "96.5%",
      productivity: "92.3%",
      overtime: "12h",
      satisfaction: "4.5/5",
    },
    {
      department: "HR",
      employees: 15,
      attendance: "98.2%",
      productivity: "89.7%",
      overtime: "8h",
      satisfaction: "4.3/5",
    },
    {
      department: "Sales",
      employees: 30,
      attendance: "94.8%",
      productivity: "95.1%",
      overtime: "15h",
      satisfaction: "4.2/5",
    },
    // Add more departments...
  ]);

  return (
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Department
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Employees
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Attendance Rate
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Productivity
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Overtime
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Satisfaction
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {data().map((item) => (
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {item.department}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.employees}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.attendance}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.productivity}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.overtime}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.satisfaction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 