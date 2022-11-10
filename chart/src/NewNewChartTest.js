import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Bar, Line } from 'react-chartjs-2';
ChartJS.register(...registerables);

function NewNewChartTest() {
  const [chartData, setChartData] = useState([]);
  const handleFetch = () => {
    let time = [];
    let field1 = [];
    axios
      .get('https://api.thingspeak.com/channels/1911662/fields/1.json?key=3OWB93ZA5CDH4DCG')
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.feeds) {
          time.push(parseInt(dataObj.created_at));
          field1.push(parseInt(dataObj.field1));
        }
        setChartData({
          labels: time,
          datasets: [
            {
              label: "Field 1",
              data: field1,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      }).catch(err => {
        console.log(err);
      });
    console.log(field1, time);
  }
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div style={{ width: 700 }}>
        <Bar data={chartData} />
    </div>
  );
}

export default NewNewChartTest;