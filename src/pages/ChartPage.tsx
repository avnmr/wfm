import { Component, onMount } from "solid-js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const ChartPage: Component = () => {
  let chartDiv: HTMLDivElement | undefined;

  onMount(() => {
    // Create root element
    const root = am5.Root.new(chartDiv!);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );

    // Add data
    const data = [
      { year: 2020, value: 2000 },
      { year: 2021, value: 2500 },
      { year: 2022, value: 2800 },
      { year: 2023, value: 3200 },
    ];

    // Create axes
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );
    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "year",
      })
    );
    series.data.setAll(data);

    return () => {
      root.dispose();
    };
  });

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Charts</h1>
      <div ref={chartDiv} class="w-full h-[500px]" />
    </div>
  );
};

export default ChartPage; 