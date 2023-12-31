import React from "react";

const Info = (props) => {
    return (
        <div className="w-full h-16 flex justify-between p-3 bg-[rgb(244,250,254)] rounded-lg shadow-lg">
            <div className="w-full flex flex-col items-center text-[rgb(129,163,194)] justify-between">
                <div className="font-normal">Blood</div>
                <div className="font-bold">B</div>
            </div>
            <div className="border-l-[2px] border-r-[2px] w-full flex flex-col items-center text-[rgb(129,163,194)] justify-between">
                <div className="font-normal">Height</div>
                <div className="font-bold">{props.Height}</div>
            </div>
            <div className="w-full flex flex-col items-center text-[rgb(129,163,194)] justify-between">
                <div className="font-normal">Weight</div>
                <div className="font-bold">{props.Weight}</div>
            </div>
        </div>
    );
};

export default Info;