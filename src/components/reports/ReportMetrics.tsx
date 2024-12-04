import { Component } from "solid-js";

export const ReportMetrics: Component = () => {
  const metrics = [
    {
      title: "Total Employees",
      value: "1,234",
      change: "+12%",
      trend: "up",
    },
    {
      title: "Average Attendance",
      value: "95.8%",
      change: "+2.3%",
      trend: "up",
    },
    {
      title: "Task Completion Rate",
      value: "87.5%",
      change: "+5%",
      trend: "up",
    },
    {
      title: "Overtime Hours",
      value: "245h",
      change: "-8%",
      trend: "down",
    },
  ];

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {metric.title}
          </h3>
          <div class="mt-2 flex items-baseline">
            <p class="text-2xl font-semibold text-gray-900 dark:text-white">
              {metric.value}
            </p>
            <p class={`ml-2 flex items-baseline text-sm font-semibold ${
              metric.trend === "up" ? "text-green-600" : "text-red-600"
            }`}>
              {metric.change}
              <svg
                class={`w-3 h-3 ml-0.5 ${
                  metric.trend === "up" ? "rotate-0" : "rotate-180"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}; 