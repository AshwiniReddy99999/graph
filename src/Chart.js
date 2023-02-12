import { Bar } from 'react-chartjs-2';
import './Chart.css'
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const data={
    labels:['Monday',"Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"],
    datasets:[
        {
            label:'Income',
            data:[5000,6000,8000,1000,500,4000,6000],
            backgroundColor:'grey'
        },
        {
            label:"Expense",
            data:[1000,2000,5000,3000,5000,6000],
            backgroundColor:'pink'
        }
    ]

}


function Charts() {
    return (
     <div className='chart'>
     <Bar data={data}/>
     </div>
    );
  }
  
  export default Charts;