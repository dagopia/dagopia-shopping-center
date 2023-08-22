import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      width:'50%',
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "#13827E",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <Box sx={{width:'50%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       
      <Line data={data}/>
    </Box>
  );
};

export default LineChart;