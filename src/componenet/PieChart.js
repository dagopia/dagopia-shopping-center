import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#13827E",
      borderColor: "#D6D6DF",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const PieChart = () => {
  return (
    <Box sx={{width:'30%'}}>
        
      <Pie data={data} />
    </Box>
  );
};
export default PieChart;