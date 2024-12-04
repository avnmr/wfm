import { Component } from "solid-js";
import { ReportChart } from "../components/reports/ReportChart";
import { ReportMetrics } from "../components/reports/ReportMetrics";
import { ReportTable } from "../components/reports/ReportTable";

const ReportPage: Component = () => {
  return (
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Reports & Analytics
        </h1>
        <div class="flex items-center space-x-4">
          <select class="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last Year</option>
          </select>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Export Report
          </button>
        </div>
      </div>

      <ReportMetrics />
      <ReportChart />
      <ReportTable />
    </div>
  );
};

export default ReportPage; 