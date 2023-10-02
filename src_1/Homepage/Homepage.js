import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from 'axios';

ChartJs.register(ArcElement, Tooltip, Legend);

function Homepage() {

    
    const [data, setData] = useState({
        datasets: [
            {
                data: [],
                backgroundColor: [                        
                    '#ffcd56',
                    '#ff0000',
                    '#0000ff',
                    '#4d5791',
                    '#a52a2a',
                    '#deb887',
                    '#8a2be2',
                    '#ffebcd',
                    '#000000',]
            }
        ],
        labels: []
    });

    useEffect(() => {
        axios.get('http://localhost:3300/budget').then(res => {
            setData({
                datasets: [
                    {
                        data: res.data.myBudget.map(i => i.budget),
                        backgroundColor: [                        
                            '#ffcd56',
                            '#ff0000',
                            '#0000ff',
                            '#4d5791',
                            '#a52a2a',
                            '#deb887',
                            '#8a2be2',
                            '#ffebcd',
                            '#000000',]
                    }
                ],
                labels: res.data.myBudget.map(i => i.title)
            })
        });
   
    }, [data])

  return (
    < div className="container center">
    <div className="page-area">
        <div className="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div className="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </div>

        <div className="text-box">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </div>

        <div className="text-box">
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </div>

        <div className="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div className="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </div>

        <div className="text-box">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </div>

        <div className="text-box">
            <h1>Free</h1>
            <p>
                This application is free of cost
            </p>
        </div>

        <div className="text-box">
            <h1>ChartJs</h1>
            {data.datasets[0].data.length ===0 ?<p>Loading chart data...</p> : <Pie data={data} />}
        </div>
    </div>
</div>
  );
}

export default Homepage;