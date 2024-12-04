import { Component, onMount } from "solid-js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const Calendar: Component = () => {
  let chartDiv: HTMLDivElement | undefined;

  onMount(() => {
    const root = am5.Root.new(chartDiv!);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: false,
        wheelX: "panX",
        wheelY: "none",
        layout: root.verticalLayout,
        pinchZoomX: true,
      })
    );

    // Sample data
    const data = [
      {
        date: new Date(2024, 2, 1).getTime(),
        department: "IT",
        employees: [
          { name: "John Doe", shift: "Morning" },
          { name: "Jane Smith", shift: "Evening" },
        ],
        value: 2,
      },
      {
        date: new Date(2024, 2, 1).getTime(),
        department: "HR",
        employees: [
          { name: "Alice Johnson", shift: "Morning" },
        ],
        value: 1,
      },
      {
        date: new Date(2024, 2, 2).getTime(),
        department: "IT",
        employees: [
          { name: "Bob Wilson", shift: "Morning" },
          { name: "Carol Brown", shift: "Evening" },
        ],
        value: 2,
      },
      // Add more schedule data...
    ];

    // Create Y-axis
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "department",
        renderer: am5xy.AxisRendererY.new(root, {
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    yAxis.data.setAll([...new Set(data.map(item => item.department))]);

    // Create X-axis
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    // Create series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "date",
        categoryYField: "department",
        valueField: "value",
        tooltip: am5.Tooltip.new(root, {
          labelText: "[bold]{department}[/]\nDate: {dateX.formatDate('MM/dd/yyyy')}\nEmployees:\n{employees.map(e => `${e.name} (${e.shift})`).join('\\n')}",
        }),
      })
    );

    series.columns.template.setAll({
      height: am5.percent(70),
      templateField: "columnSettings",
      strokeOpacity: 0,
      fillOpacity: 0.8,
      fill: am5.color("#3b82f6"),
      tooltipY: 0,
    });

    series.data.setAll(data);

    // Enable range selection
    // const rangeSelector = chart.set(
    //   "scrollbarX",
    //   am5.Scrollbar.new(root, {
    //     orientation: "horizontal",
    //   })
    // );

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "zoomX",
      xAxis: xAxis,
    }));

    // Make stuff animate on load
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  });

  return (
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
          Schedule Calendar
        </h2>
        <div class="flex space-x-2">
          <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Today
          </button>
          <button class="p-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button class="p-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={chartDiv} class="h-[600px]" />
    </div>
  );
} 