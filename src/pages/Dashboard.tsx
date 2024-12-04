import { Component, createSignal } from "solid-js";
import { DashboardStats } from "../components/dashboard/DashboardStats";
import { WorkforceOverview } from "../components/dashboard/WorkforceOverview";
import { ScheduleTimeline } from "../components/dashboard/ScheduleTimeline";
import { TaskDistribution } from "../components/dashboard/TaskDistribution";

const Dashboard: Component = () => {
  const [isLoading, setIsLoading] = createSignal(true);

  // Simulate loading
  setTimeout(() => setIsLoading(false), 1000);

  return (
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Workforce Dashboard
        </h1>
        <div class="flex space-x-3">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {isLoading() ? (
        <DashboardSkeleton />
      ) : (
        <>
          <DashboardStats />
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WorkforceOverview />
            <TaskDistribution />
          </div>
          <ScheduleTimeline />
        </>
      )}
    </div>
  );
};

const DashboardSkeleton: Component = () => {
  return (
    <div class="space-y-6 animate-pulse">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(4).fill(0).map(() => (
          <div class="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        ))}
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        <div class="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard; 