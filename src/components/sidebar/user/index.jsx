import React from "react";

import DefaultAvatar from '../../../assets/image/CaoHoangThien.png';

const User = () => {
    return (
        <div className="w-full flex items-center">
            <div className="w-[36px] h-[36px] mr-4">
                <img src={DefaultAvatar} className="w-full h-full rounded-full"/>
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-bold text-[rgb(100,127,147)]">Cao Hoàng Thiện</div>
                <div className="text-sm font-bold text-[rgb(159,185,207)]">21 years old, Vietnam</div>
            </div>
        </div>
    );
};

export default User;