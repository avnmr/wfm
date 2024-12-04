import { Component, onCleanup, onMount } from "solid-js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const AmChartDemo: Component = () => {
  let root: am5.Root;

  onMount(() => {
    root = am5.Root.new("chartdiv");
    
    root.setThemes([am5themes_Animated.new(root)]);
    
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );
    
    // Create data
    let data = [{
      category: "Research",
      value: 80
    }, {
      category: "Marketing",
      value: 200
    }, {
      category: "Sales",
      value: 300
    }];
    
    // Create axes
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );
    xAxis.data.setAll(data);
    
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    
    // Create series
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
      })
    );
    series.data.setAll(data);
  });

  onCleanup(() => {
    root?.dispose();
  });

  return (
    <div id="chartdiv" class="w-full h-96"></div>
  );
};

export default AmChartDemo; 