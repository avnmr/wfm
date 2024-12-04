import { Component, onMount } from "solid-js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const WorkforceOverview: Component = () => {
  let chartDiv: HTMLDivElement | undefined;

  onMount(() => {
    const root = am5.Root.new(chartDiv!);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
      })
    );

    // Data
    const data = [
      { department: "IT", present: 45, absent: 3, leave: 2 },
      { department: "HR", present: 28, absent: 1, leave: 1 },
      { department: "Sales", present: 65, absent: 4, leave: 3 },
      { department: "Operations", present: 92, absent: 6, leave: 4 },
      { department: "Finance", present: 22, absent: 1, leave: 1 },
    ];

    // Create axes
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "department",
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    yAxis.data.setAll(data);

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    // Create series
    function createSeries(name: string, field: string, color: string) {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: field,
          categoryYField: "department",
          stacked: true,
          fill: am5.color(color),
        })
      );

      series.data.setAll(data);
      series.appear();
    }

    createSeries("Present", "present", "#60a5fa");
    createSeries("Absent", "absent", "#f87171");
    createSeries("Leave", "leave", "#fbbf24");

    // Add legend
    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    return () => {
      root.dispose();
    };
  });

  return (
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Workforce Overview by Department
      </h2>
      <div ref={chartDiv} class="h-[400px]" />
    </div>
  );
}; 