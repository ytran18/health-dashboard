import React, {useState, useEffect} from "react";
import { io } from "socket.io-client";
import SingleChart from "./single-chart";

const socket = io("localhost:5000/", {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:3000/",
    },
});

const Charts = () => {
    const [receiveChartData, setReceiveChartData] = useState([]);
    useEffect(() => {
        socket.on('chart_data', (receiveChartData) => {
            setReceiveChartData(receiveChartData);
            console.log(receiveChartData);
        });
        return () => {
            socket.off();
        };
    }, []);
/**
    // const chartData = [
    //     { name: 'Resting heart rate', averange: '66', data: [
    //         { name: 'Mon', value: receiveChartData.avgHR },
    //         { name: 'Tue', value: receiveChartData.avgHR },
    //         { name: 'Wed', value: receiveChartData.avgHR },
    //         { name: 'Thu', value: receiveChartData.avgHR },
    //         { name: 'Fri', value: receiveChartData.avgHR },
    //         { name: 'Sat', value: receiveChartData.avgHR },
    //         { name: 'Sun', value: receiveChartData.avgHR },
    //     ] },
    //     { name: 'Performance heart rate', averange: '143', data: [
    //         { name: 'Mon', value: 92 },
    //         { name: 'Tue', value: 91 },
    //         { name: 'Wed', value: 100 },
    //         { name: 'Thu', value: 102 },
    //         { name: 'Fri', value: 89},
    //         { name: 'Sat', value: 87 },
    //         { name: 'Sun', value: 78 },
    //     ] },
    // ];
*/
    const chartData = [
            { name: 'Heart rate', averange: '66', data: []},
            { name: 'Blood oxygen level', averange: '143', data: []}];

    const daysOfWeek = ['Sun','Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    chartData[0].data = receiveChartData.map(entry => ({ name: daysOfWeek[entry._id - 1], value: entry.avgHR }));
    chartData[1].data = receiveChartData.map(entry => ({ name: daysOfWeek[entry._id - 1], value: entry.avgSPO2 }));
    return (
        <div className="w-full flex px-16">
            <div className="flex justify-between w-full">
                {chartData.map((item, index) => {
                    return (
                        <div className="" key={index}>
                            <SingleChart data={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Charts;