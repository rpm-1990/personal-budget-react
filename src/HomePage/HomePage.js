import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import * as d3 from 'd3';

function Homepage() {
  const [datasource,setDatasource] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
        '#ffcd56', '#ff0000', '#0000ff', '#4d5791', '#a52a2a', '#8a2be2', '#ffebcd'
        ],
      },
    ],
    labels: [],
  });

  let myChartRef = useRef(null);

  const createChart = () => {
    if (myChartRef.current) {
      myChartRef.current.destroy(); // Destroy existing Chart if it exists
    }
    const ctx = document.getElementById("myChart").getContext("2d");
    myChartRef.current = new Chart(ctx, {
      type: 'pie',
      data: datasource
    });
  }

const createD3Chart = () => {
  const width = 300;
  const height = 300;
  const radius = Math.min(width, height) / 2;

  const color = d3.scaleOrdinal()
  .domain(datasource.labels.map(label => label.toString()))
  .range(['#ffcd56', '#ff0000', '#0000ff', '#4d5791', '#a52a2a', '#8a2be2', '#ffebcd']);

  const svg = d3.select('#d3Chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

  const arc = d3.arc()
    .innerRadius(radius - 70)
    .outerRadius(radius);

  const pie = d3.pie()
    .value((d) => d)
    .sort(null);

  const data = pie(datasource.datasets[0].data);

  const path = svg.selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', (d) => arc(d)) // <-- Cast to string
    .attr('fill', (d) => color(d.data.toString())); // <-- Convert to string

  // Add labels with polylines
  const labelArc = d3.arc()
    .innerRadius(radius - 40)
    .outerRadius(radius - 40);

  const labels = svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('transform', (d) => `translate(${labelArc.centroid(d)})`)
    .attr('dy', '.35em')
    .attr('text-anchor', 'middle')
    .text(d => d.data);
  const polyline = svg.selectAll('polyline')
  .data(data)
  .enter()
  .append('polyline')
  .attr('points', (d) => {
    const pos = labelArc.centroid(d);
    return [arc.centroid(d), labelArc.centroid(d), pos].join(' ');
  });
} 
    const getBudget = () => {
      axios.get('http://localhost:3000/budget')
        .then(function (res) {
          for (var i = 0; i < res.data.myBudget.length; i++) {
            datasource.datasets[0].data[i] = res.data.myBudget[i].budget;
            datasource.labels[i] = res.data.myBudget[i].title;
          }
          setDatasource({ ...datasource });
          createChart();
          createD3Chart();
        });
    }

    useEffect(() => {
    getBudget();
},[]);
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
        <canvas id="myChart" width="400" height="400"></canvas>
        </div>        
        <article>
          <h1>D3 Chart</h1>
              <div id="d3Chart"></div>
      </article>


    </div>
</div>
  );
} 
export default Homepage