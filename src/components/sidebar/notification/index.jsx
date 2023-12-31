import React from "react";

const Notification = (props) => {
    const {notify} = props;
    return (
        <div className="w-full shadow-md p-2 h-fit border border-[rgb(219,219,219)] rounded-md flex flex-col">
            <div className="text-sm font-semibold">{notify.Notification}</div>
        </div>
    )
};

export default Notification;