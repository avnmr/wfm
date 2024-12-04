import { Component, createSignal } from "solid-js";
import { TaskBoard } from "../components/tasks/TaskBoard";
import { TaskList } from "../components/tasks/TaskList";

const TaskPage: Component = () => {
  const [view, setView] = createSignal<"board" | "list">("board");

  return (
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Task Management
        </h1>
        <div class="flex items-center space-x-4">
          <div class="inline-flex rounded-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setView("board")}
              class={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                view() === "board"
                  ? "bg-blue-600 text-white"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Board
            </button>
            <button
              onClick={() => setView("list")}
              class={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                view() === "list"
                  ? "bg-blue-600 text-white"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              List
            </button>
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add Task
          </button>
        </div>
      </div>

      {view() === "board" ? <TaskBoard /> : <TaskList />}
    </div>
  );
};

export default TaskPage; 