import React, {useState, useEffect} from "react";
import io from 'socket.io-client'

import SingleCard from "./single-card";

import { ReactComponent as IconHearthRate } from '../../../assets/icons/iconHearhRate.svg';
import { ReactComponent as IconTemparature } from '../../../assets/icons/iconTemparature.svg';


const socket = io("localhost:5000/", {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:3000/",
    },
});

const Cards = () => {

    const [healthData, setHealthData] = useState([]);
    
    useEffect(() => {
        socket.on("connect", () => {
            console.log('Socket Connect:', socket.connected);
        });
        socket.on('health_data', (healthData) => {
            console.log('Received new data:', healthData);
            setHealthData(healthData);
        });
        return () => {
            socket.off();
        };
    }, []);


    const cards = [
        { title: 'Current hearth rate', type: 'hearth-rate', value: healthData.HR, icon:  IconHearthRate },
        { title: 'Body temparature', type: 'temparature', value: healthData.temp, icon: IconTemparature  },
        { title: 'Brain activity', type: 'brain-activity', value: '80', status: "Hight"  },
    ];

    return (
        <div className="flex justify-between w-full px-16">
            {cards.map((item, index) => {
                return (
                    <div className="" key={index}>
                        <SingleCard data={item}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Cards;