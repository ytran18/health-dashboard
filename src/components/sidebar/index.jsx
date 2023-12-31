import React,{useState, useEffect} from "react";

import User from './user/index.jsx';
import Info from './info/index.jsx';
import Calendar from './calendar/index.jsx';
import Notification from "./notification/index.jsx";
import { io } from "socket.io-client";

const socket = io("localhost:5000/", {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:3000/",
    },
});


const Sidebar = (props) => {

    const [receiveNotifies, setReceiveNotifies] = useState([]);
    useEffect(() => {
        socket.on('notify', (receiveNotifies) => {
            setReceiveNotifies(receiveNotifies);
        });
        return () => {
            socket.off();
        };
    }, []);

    return (
        <div className="w-full h-full p-6 overflow-y-auto">
            <div className="mb-8">
                <User fullname={props.userInfo.fullName} DOB={props.userInfo.dateOfBirth}/>
            </div>
            <div className="mb-8">
                <Info Height={props.userInfo.Height} Weight={props.userInfo.Weight} />
            </div>
            <div className="mb-8">
                <Calendar />
            </div>
            <div className="mb-4">
                { receiveNotifies.map((item, index) => {
                return (
                    <div className="mb-4" key={index}>
                            <Notification notify={item}/>
                    </div>
                )
            })}
                
            </div>
        </div>
    );
};

export default Sidebar;