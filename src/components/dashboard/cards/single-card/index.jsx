import React from "react";

import { Progress } from 'antd';

import './card.css';

const SingleCard = (props) => {

    const { data } = props;

    const bgColor = {
        'hearth-rate': 'bg-[rgb(59,118,239)]',
        'temparature': 'bg-[rgb(99,199,255)]',
        'brain-activity': 'bg-[rgb(166,108,212)]',
        'oxygen-level': " bg-[rgb(166,108,212)]"
    }[data?.type];

    return (
        <div className={`w-[250px] h-[150px] hover:scale-105 duration-150 cursor-pointer rounded-xl shadow-md ${bgColor} p-3 flex flex-col`}>
            <div className="text-[14px] text-white font-bold">{data?.title}</div>
            {(data?.type === 'hearth-rate' || data?.type === 'temparature' || data?.type ==="oxygen-level") && (
                <div className="flex items-center mt-4">
                    <div className="text-[50px] text-white font-bold mr-10">{data?.value}</div>
                    <div className=""><data.icon /></div>
                </div>
            )}
            {data.type === 'brain-activity' && (
                <div className="mt-4 w-full flex justify-center">
                    <Progress 
                        type="circle" 
                        percent={data?.value} 
                        size={[80,80]} 
                        strokeColor={"#ffffff"}
                        format={(percent) => `${data?.status}`}
                    />
                </div>
            )}
        </div>
    );
};

export default SingleCard;