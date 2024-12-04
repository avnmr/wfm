import { Component, createSignal } from "solid-js";

interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}

export const TaskBoard: Component = () => {
  const [tasks] = createSignal<{ [key: string]: Task[] }>({
    todo: [
      {
        id: 1,
        title: "Update Employee Database",
        description: "Add new fields for employee skills and certifications",
        assignee: "John Doe",
        priority: "High",
        dueDate: "2024-03-15",
      },
      // More todo tasks...
    ],
    inProgress: [
      {
        id: 2,
        title: "Review Leave Requests",
        description: "Process pending leave requests for March",
        assignee: "Jane Smith",
        priority: "Medium",
        dueDate: "2024-03-10",
      },
      // More in-progress tasks...
    ],
    completed: [
      {
        id: 3,
        title: "Monthly Payroll Processing",
        description: "Process February payroll for all departments",
        assignee: "Mike Johnson",
        priority: "High",
        dueDate: "2024-03-01",
      },
      // More completed tasks...
    ],
  });

  const TaskCard: Component<{ task: Task }> = (props) => {
    return (
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-sm font-medium text-gray-900 dark:text-white">
            {props.task.title}
          </h3>
          <span
            class={`px-2 py-1 text-xs font-medium rounded-full ${
              props.task.priority === "High"
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                : props.task.priority === "Medium"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
            }`}
          >
            {props.task.priority}
          </span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {props.task.description}
        </p>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img
              class="w-6 h-6 rounded-full"
              src={`https://ui-avatars.com/api/?name=${props.task.assignee}`}
              alt={props.task.assignee}
            />
            <span class="ml-2 text-xs text-gray-500 dark:text-gray-400">
              {props.task.assignee}
            </span>
          </div>
          <span class="text-xs text-gray-500 dark:text-gray-400">
            Due: {props.task.dueDate}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Todo Column */}
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
          To Do
        </h2>
        <div class="space-y-4">
          {tasks().todo.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      </div>

      {/* In Progress Column */}
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
          In Progress
        </h2>
        <div class="space-y-4">
          {tasks().inProgress.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      </div>

      {/* Completed Column */}
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Completed
        </h2>
        <div class="space-y-4">
          {tasks().completed.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}; 