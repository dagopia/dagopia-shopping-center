import React, { useEffect, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

const ChartComponent = ({ chartData }) => {
  
    return () => {
        <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              }
            }
          }}
        />
      </div>
   
  
    }
}

export default ChartComponent;
