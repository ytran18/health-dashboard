import React from "react";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SingleChart = (props) => {

    const { data } = props;

    return (
        <div className="w-[420px] h-[300px] bg-white rounded-xl shadow-md flex flex-col p-4">
            <div className="text-[rgb(154,181,205)] text-lg font-semibold mb-3">{data?.name}</div>
            {/* <div className="text-sm font-semibold mb-3">{`${data.averange} bmp (averange)`}</div> */}
            <div className="h-full">
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                        width='100%'
                        height={300}
                        data={data?.data}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" tension={10} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SingleChart;