import { Component, createSignal } from "solid-js";

interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  priority: "High" | "Medium" | "Low";
  status: "Todo" | "In Progress" | "Completed";
  dueDate: string;
}

export const TaskList: Component = () => {
  const [tasks] = createSignal<Task[]>([
    {
      id: 1,
      title: "Update Employee Database",
      description: "Add new fields for employee skills and certifications",
      assignee: "John Doe",
      priority: "High",
      status: "Todo",
      dueDate: "2024-03-15",
    },
    {
      id: 2,
      title: "Review Leave Requests",
      description: "Process pending leave requests for March",
      assignee: "Jane Smith",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2024-03-10",
    },
    // Add more tasks...
  ]);

  return (
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Task
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Assignee
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Priority
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Due Date
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {tasks().map((task) => (
              <tr>
                <td class="px-6 py-4">
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">
                      {task.title}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      {task.description}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <img
                      class="h-8 w-8 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${task.assignee}`}
                      alt=""
                    />
                    <span class="ml-2 text-sm text-gray-900 dark:text-white">
                      {task.assignee}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span
                    class={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        : task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span
                    class={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : task.status === "In Progress"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  {task.dueDate}
                </td>
                <td class="px-6 py-4">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 