import React from "react";

import SingleChart from "./single-chart";

const Charts = () => {

    const chartData = [
        { name: 'Resting heart rate', averange: '66', data: [
            { name: 'Mon', value: 80 },
            { name: 'Tue', value: 98 },
            { name: 'Wed', value: 72 },
            { name: 'Thu', value: 80 },
            { name: 'Fri', value: 100 },
            { name: 'Sat', value: 112 },
            { name: 'Sun', value: 90 },
        ] },
        { name: 'Performance heart rate', averange: '143', data: [
            { name: 'Monday', value: 92 },
            { name: 'Tue', value: 91 },
            { name: 'Wed', value: 100 },
            { name: 'Thu', value: 102 },
            { name: 'Fri', value: 89},
            { name: 'Sat', value: 87 },
            { name: 'Sun', value: 78 },
        ] },
    ];

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