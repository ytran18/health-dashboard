import React from "react";

import DefaultAvatar from '../../../assets/image/CaoHoangThien.png';

const User = (props) => {
    const {DOB} = props;
    const yearNow = new Date().getFullYear();
    const dob = new Date(props.DOB);
    const year = dob.getFullYear();
    const YearofBirth = yearNow - year;
    return (
        <div className="w-full flex items-center">
            <div className="w-[36px] h-[36px] mr-4">
                <img src="https://i.pravatar.cc/300" className="w-full h-full rounded-full" alt="avatar"/>
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-bold text-[rgb(100,127,147)]">{props.fullname}</div>
                <div className="text-sm font-bold text-[rgb(159,185,207)]">{YearofBirth} years old, Vietnam</div>
            </div>
        </div>
    );
};

export default User;