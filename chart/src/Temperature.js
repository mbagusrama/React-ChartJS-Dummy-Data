import { useState } from "react";
import "./App.css";
// import BarChart from "./components/BarChart";
// import LineChart from "./components/LineChart";
// import PieChart from "./components/PieChart";
import { UserData } from './Book1';
import { Bar, Pie, Line } from "react-chartjs-2";

function Temperature() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Date),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.T),
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT
  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <Bar data={userData} />
      </div>
    </div>
  );
}

export default Temperature;
