import $ from 'jquery';
import { Chart as ChartJS } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

function TestChart() {
  var updateInterval = 20; //in ms
  var numberElements = 200;

  var updateCount = 0;

  var xAccelChart = $("#xAccelChart");

  var commonOptions = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          displayFormats: {
            millisecond: 'mm:ss:SSS'
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: { display: false },
    tooltips: {
      enabled: false
    }
  };

  var xAccelChartInstance = new Chart(xAccelChart, {
    type: 'line',
    data: {
      datasets: [{
        label: "X Acceleration",
        data: 0,
        fill: false,
        borderColor: '#343e9a',
        borderWidth: 1
      }]
    },
    options: Object.assign({}, commonOptions, {
      title: {
        display: true,
        text: "Acceleration - X",
        fontSize: 18
      }
    })
  });

  const addData = (data) => {
    xAccelChartInstance.data.labels.push(new Date());
    xAccelChartInstance.data.datasets.forEach((dataset) => { dataset.data.push(data["RH"]) });
    if (updateCount > numberElements) {
      xAccelChartInstance.data.labels.shift();
      xAccelChartInstance.data.datasets[0].data.shift();
    }
    else updateCount++;
    xAccelChartInstance.update();
  };


  const updateData = () => {
    console.log("Update Data");
    $.getJSON("ChartData.JSON", addData);
    setTimeout(updateInterval);
  }

  updateData();
  console.log(xAccelChartInstance);

  return (
    <div className='lineChart' >
      <div style={{ width: 700 }}>
        <Line data={xAccelChartInstance} />
      </div>
    </div>
  );
}

export default TestChart;