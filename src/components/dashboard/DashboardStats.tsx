import { Component } from "solid-js";

export const DashboardStats: Component = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Employees"
        value="1,234"
        change="+12%"
        trend="up"
      />
      <StatCard
        title="Active Tasks"
        value="856"
        change="-3%"
        trend="down"
      />
      <StatCard
        title="Attendance Rate"
        value="95.8%"
        change="+2.3%"
        trend="up"
      />
      <StatCard
        title="Productivity"
        value="87.5%"
        change="+5%"
        trend="up"
      />
    </div>
  );
};

const StatCard: Component<{
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}> = (props) => {
  return (
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
        {props.title}
      </h3>
      <div class="mt-2 flex items-baseline">
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">
          {props.value}
        </p>
        <p class={`ml-2 flex items-baseline text-sm font-semibold ${
          props.trend === "up" ? "text-green-600" : "text-red-600"
        }`}>
          {props.change}
          <svg
            class={`w-3 h-3 ml-0.5 ${
              props.trend === "up" ? "rotate-0" : "rotate-180"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </p>
      </div>
    </div>
  );
}; 