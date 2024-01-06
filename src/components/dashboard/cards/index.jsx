import React, {useState, useEffect} from "react";
import io from 'socket.io-client'
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import SingleCard from "./single-card";

import { ReactComponent as IconHearthRate } from '../../../assets/icons/iconHearhRate.svg';
import { ReactComponent as IconTemparature } from '../../../assets/icons/iconTemparature.svg';
import { ReactComponent as IconOxygenLevel} from '../../../assets/icons/blood-oxygen-3.svg'

const socket = io("localhost:5000/", {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:3000/",
    },
});
const  savedData = async (healthData) => {
    try {
        const result = await axios.post("http://localhost:5000/api/healthdata/store", healthData);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}        
const Cards = () => {
    const { user } = useAuth();
    console.log(user.StudentID);
    const [healthData, setHealthData] = useState([]);
    
    useEffect(() => {
        socket.on("connect", () => {
            console.log('Socket Connect:', socket.connected);
        });
        socket.on('health_data', (healthData) => {
            console.log('Received new data:', healthData);
            setHealthData(healthData);

            const StudentID = {"StudentID": user.StudentID};
            const saveData = {...healthData,...StudentID };
            console.log(saveData);
            savedData(saveData);
        });
        return () => {
            socket.off();
        };
    }, []);


    const cards = [
        { title: 'Current hearth rate', type: 'hearth-rate', value: healthData.HR, icon:  IconHearthRate },
        { title: 'Body temparature', type: 'temparature', value: healthData.temp, icon: IconTemparature  },
        { title: 'Current oxygen level', type: 'oxygen-level', value: healthData.SPO2, icon: IconOxygenLevel },
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