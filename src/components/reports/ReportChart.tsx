import { Component, onMount } from "solid-js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const ReportChart: Component = () => {
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
        layout: root.verticalLayout,
      })
    );

    // Create axes
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "month",
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add series
    function createSeries(name: string, field: string) {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          categoryXField: "month",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{name}: {valueY}",
          }),
        })
      );

      series.strokes.template.setAll({
        strokeWidth: 2,
      });

      return series;
    }

    // Data
    const data = [
      {
        month: "Jan",
        attendance: 95,
        productivity: 88,
        satisfaction: 85,
      },
      {
        month: "Feb",
        attendance: 93,
        productivity: 87,
        satisfaction: 87,
      },
      // Add more months...
    ];

    // Create series
    const attendanceSeries = createSeries("Attendance", "attendance");
    const productivitySeries = createSeries("Productivity", "productivity");
    const satisfactionSeries = createSeries("Satisfaction", "satisfaction");

    // Set data
    xAxis.data.setAll(data);
    attendanceSeries.data.setAll(data);
    productivitySeries.data.setAll(data);
    satisfactionSeries.data.setAll(data);

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
        Performance Trends
      </h2>
      <div ref={chartDiv} class="h-[400px]" />
    </div>
  );
}; 