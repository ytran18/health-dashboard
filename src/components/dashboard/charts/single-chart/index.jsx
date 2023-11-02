import React from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js'

import { Line } from 'react-chartjs-2';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: Math.floor(Math.random() * 101),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            // position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const SingleChart = () => {
    return (
        <div className="w-[350px] h-[300px] bg-white rounded-xl shadow-md">
            <Line options={options} data={data}/>
        </div>
    );
};

export default SingleChart;