import React, { useState } from "react";
import Chart from "react-apexcharts";

const Charts2 = () => {
  const [state] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%", // Adjust the width for smaller screens
            },
          },
        },
      ],
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70],
      },
      {
        name: "series-2",
        data: [34, 46, 34, 65, 35, 65, 34],
      },
    ],
  });

  return (
    <Chart
      sx={{ width: "500" }}
      options={state.options}
      series={state.series}
      type="area"
      width="100%"
      style={{ margin: "8px" }}
    />
  );
};

export default Charts2;
