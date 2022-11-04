import { useEffect, useState } from "react";
import "./App.css";
// import BarChart from "./components/BarChart";
// import LineChart from "./components/LineChart";
// import PieChart from "./components/PieChart";
import { UserData } from './Book1';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);

function App() {
    fetch("thingspeak.com")

    const [ RH, setRH] = useState({
      labels: UserData.map((data) => data.Date),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.RH),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'],
        },
      ],
    });

    const [ temperature, setTemperature] = useState({
      labels: UserData.map((data) => data.Date),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.T),
          backgroundColor: [
            'rgba(120, 5, 123, 0.2)'],
        },
      ],
    });

    const [ CO2, setCO2] = useState({
      labels: UserData.map((data) => data.Date),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.CO2),
          backgroundColor: [
            'rgba(120, 5, 123, 0.2)'],
        },
      ],
    });

    const [ PM25, setPM25] = useState({
      labels: UserData.map((data) => data.Date),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.PM25),
          backgroundColor: [
            'rgba(120, 5, 123, 0.2)'],
        },
      ],
    });

    

    // useEffect(() => {
    //   setUserData
    // });



  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT
  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <Bar data={RH} />
      </div>
      <div style={{ width: 700 }}>
        <Bar data={temperature} />
      </div>
      <div style={{ width: 700 }}>
        <Bar data={CO2} />
      </div>
      <div style={{ width: 700 }}>
        <Bar data={PM25} />
      </div>
    </div>
  );
}

export default App;
