import React from "react";

import User from './user/index.jsx';
import Info from './info/index.jsx';
import Calendar from './calendar/index.jsx';

const Sidebar = () => {
    return (
        <div className="w-full h-full p-6">
            <div className="mb-8">
                <User />
            </div>
            <div className="mb-8">
                <Info />
            </div>
            <div className="">
                <Calendar />
            </div>
        </div>
    );
};

export default Sidebar;