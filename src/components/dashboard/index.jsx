import React from "react";

import Header from './header/index.jsx'
import Cards from './cards/index.jsx';
import Charts from './charts/index.jsx';

const Dashboard = () => {

    return (
        <div className="w-full h-full p-6">
            <div className="w-full mb-16">
                <Header />
            </div>
            <div className="w-full mb-16">
                <Cards />
            </div>
            <div className="w-full">
                <Charts />
            </div>
        </div>
    );
};

export default Dashboard;