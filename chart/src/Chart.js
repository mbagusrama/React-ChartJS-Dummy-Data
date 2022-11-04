// import { Chart as ChartJS } from "chart.js/auto";
import { StreamingPlugin, ChartStreaming } from 'chartjs-plugin-streaming'
import {  
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip
} from 'chart.js'
import {
  Chart,
  Line,
  Pie,
  Doughnut,
  Radar,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2'
ChartJS.register(
  LinearScale,
  RadialLinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  StreamingPlugin, 
  Legend,
  Tooltip
)


const data =
{
  datasets :
  [
    {
      label : "real",
      backgroundColor : "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      fill : false,
      lineTension : 0,
      borderDash: [8,4],
      data : [],
      showLine: true,
    }
  ]
}
console.log(data.datasets[0].data)
const RealTime_ChartTest_options = 
{
  elements : 
  {
    line :
    {
      tesion: 0.5
    }
  },
  scales: {
    x: {
      type: "realtime",
      realtime: {
        onRefresh: function() {
          data.datasets[0].data.push({
            x: Date.now(),
            y: Math.random() * 100
          });
        },
        delay: 300,
        refresh: 300
      }
    },
    y: {
      max: 100,
      min: 0
    }
  }
}

const Chart1 = ()=>
{
  return(
   <Line data={data} options={RealTime_ChartTest_options} />
  )
}

export default Chart1;