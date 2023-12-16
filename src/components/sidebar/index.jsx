import React from "react";

import User from './user/index.jsx';
import Info from './info/index.jsx';
import Calendar from './calendar/index.jsx';
import Notification from "./notification/index.jsx";

const Sidebar = () => {
    return (
        <div className="w-full h-full p-6 overflow-y-auto">
            <div className="mb-8">
                <User />
            </div>
            <div className="mb-8">
                <Info />
            </div>
            <div className="mb-8">
                <Calendar />
            </div>
            <div className="mb-4">
                <Notification />
            </div>
            <div className="mb-4">
                <Notification />
            </div>
            <div className="mb-4">
                <Notification />
            </div>
            <div className="mb-4">
                <Notification />
            </div>
            <div className="mb-4">
                <Notification />
            </div>
            <div className="mb-4">
                <Notification />
            </div>
        </div>
    );
};

export default Sidebar;