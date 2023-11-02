import React, { useEffect, useState } from "react";

import { ReactComponent as IconSearch } from '../../../assets/icons/iconSearch.svg';
import { ReactComponent as IconClock } from '../../../assets/icons/iconClock.svg';

const lookupMonth = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
};

const Header = () => {

    const [state, setState] = useState({
        currTime: ``,
        currDate: ``,
        searchValue: ``,
    });

    useEffect(() => {
        const now = new Date();
        const hour = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
        const minutes = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
        const time = (hour >= 0 && hour < 12) ? 'AM' : 'PM';
        const currTime = `${hour}:${minutes} ${time}`;
        
        const month = lookupMonth[now.getMonth()];
        const date = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`;
        const currDate = `${month} ${date}`
        
        setState(prev => ({...prev, currTime: currTime, currDate: currDate}));
    },[]);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hour = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
            const minutes = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
            const time = (hour >= 0 && hour < 12) ? 'AM' : 'PM';
            const currTime = `${hour}:${minutes} ${time}`;

            const month = lookupMonth[now.getMonth()];
            const date = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`;
            const currDate = `${month} ${date}`
            
            setState(prev => ({...prev, currTime: currTime, currDate: currDate}));
        }, 60000);
        return () => clearInterval(interval);
    },[]);

    const handleSearch = (event) => {
        setState(prev => ({...prev, searchValue: event?.target?.value}));
    };

    return (
        <div className="w-full flex items-center">
            <div className="w-[70%] h-9 relative">
                <IconSearch className="absolute transform scale-90 top-1 left-2"/>
                <input 
                    className="w-full h-full bg-[rgb(244,250,254)] outline-none shadow-md pl-12 text-[14px] font-semibold rounded-md"
                    placeholder="Search ..."
                    value={state.searchValue}
                    onChange={handleSearch}
                />
            </div>
            <div className="w-[30%] h-9 flex items-center justify-between px-3 ml-16 bg-white shadow-md rounded-md">
                <div className="flex items-center">
                    <IconClock className="transform scale-90 mr-3"/>
                    <div className="text-[14px] font-semibold">{state.currTime}</div>
                </div>
                <div className="flex items-center text-[14px] font-semibold">{state.currDate}</div>
            </div>
        </div>
    );
};

export default Header;