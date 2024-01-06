import React from "react";
import { Chart } from "react-google-charts";

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 10],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

export const options = {
  backgroundColor: "none",
  chartArea: { left: "", top: "", height: "60%", width: "100%" },
  colors: ['#336699', // Dark Blue
  '#4682B4', // Steel Blue
  '#87CEFA', // Light Sky Blue
  '#ADD8E6', // Light Blue
 ],
  pieHole: 0,
  is3D: true,
  legend: {
    position: "bottom",
    maxLines: 999,
    textStyle: {
      color: "#8d0c02",
      fontSize: 13, 
      bold: false, 
      italic: false,
    },
    
  },
  pieSliceText: "hello",
  noDataMessage: '',

  tooltip: { 
    showColorCode: true,
    text: '50', 
    textStyle: {
      fontSize: 13,
    },
  },
};

  
function DonutChart(props) {
  const chartStyle = {
  
  };
  return (
    <div className="donut-chart" style={chartStyle}>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={props.data}
        options={options}
      /> 
    </div>
  );
}

export default DonutChart;
