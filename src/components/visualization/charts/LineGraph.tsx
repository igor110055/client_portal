import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Sentiment score',
        },
    },
};
const generateTimeLabelsHr = () => {
    let x = 1; //minutes interval
    let times = []; // time array
    let tt = 0; // start time
    let ap = ['AM', 'PM']; // AM-PM

//loop to increment the time and push results in array
    for (let i=0;tt<1*60; i++) {
        let hh = Math.floor(tt/60); // getting hours of day in 0-24 format
        let mm = (tt%60); // getting minutes of the hour in 0-55 format
        times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
    }

    return times
}
const generateTimeLabelsDay = () => {
    let x = 10; //minutes interval
    let times = []; // time array
    let tt = 0; // start time
    let ap = ['AM', 'PM']; // AM-PM

//loop to increment the time and push results in array
    for (let i=0;tt<10*60; i++) {
        let hh = Math.floor(tt/60); // getting hours of day in 0-24 format
        let mm = (tt%60); // getting minutes of the hour in 0-55 format
        times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
    }

    return times
}
const labels = generateTimeLabelsHr();

export const getTwitterData = (data: any) => {
    const btcData: number[] =[];
    const ethData: number[] =[];
    const xrpData: number[] =[];
    const solData: number[] =[];
    data.forEach((tweet: any) => {
        switch (tweet.coin){
            case 'BTC':
                btcData.push(tweet.sentiment);
                break;
            case 'ETH':
                ethData.push(tweet.sentiment);
                break;
            case 'XRP':
                xrpData.push(tweet.sentiment);
                break;
            case 'SOL':
                solData.push(tweet.sentiment);
                break;
            default:
                break;
        }
    })
    return {labels,
        datasets: [
            {
                label: 'BTC',
                data: btcData,
                borderColor: 'rgb(128,152,42)',
                backgroundColor: 'rgba(72,138,54,0.5)',
            },
            {
                label: 'ETH',
                data: ethData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'XRP',
                data: xrpData,
                borderColor: 'rgb(138,103,29)',
                backgroundColor: 'rgba(203,121,39,0.5)',
            },
            {
                label: 'SOL',
                data: solData,
                borderColor: 'rgb(98,34,131)',
                backgroundColor: 'rgba(75,18,87,0.5)',
            },
        ]}
};

export const getRedditData = (data: any) => {
    const parsedData = data.map((post: any) => post.sentiment);
    const dayLabels = generateTimeLabelsDay();
    console.log(parsedData);
    return {
        labels: dayLabels,
        datasets: [
            {
                label: 'ETH',
                data: parsedData,
                borderColor: 'rgb(189,232,5)',
                backgroundColor: 'rgba(163,234,88,0.5)',
            }
        ]}
};

export function LineGraphDemo(props: any) {
    const {mode, data} = props
    return <Line options={options} data={mode === 'twitter' ? getTwitterData(data) : getRedditData(data)}/>;
}
