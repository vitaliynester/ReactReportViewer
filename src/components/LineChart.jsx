import React from 'react';
import {Chart as ChartJS} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip, ArcElement} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip, ArcElement);

const options = {
    aspectRatio: 4 / 2,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Средняя сумма доходов по месяцам',
        },
    },
};

const LineChart = ({labels, values}) => {
    return (
        <Line
            options={options}
            data={
                {
                    labels: labels,
                    datasets: [
                        {
                            label: "Выручка",
                            data: values,
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)"
                        },
                    ],
                }
            }
        />
    );
};

export default LineChart;