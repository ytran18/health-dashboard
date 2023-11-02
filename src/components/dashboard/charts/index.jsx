import React from "react";

import SingleChart from "./single-chart";

const Charts = () => {
    return (
        <div className="w-full flex justify-between px-16">
            <SingleChart />
            <SingleChart />
        </div>
    );
};

export default Charts;