import Dashboard from "../components/dashboard";
import Sidebar from "../components/sidebar";
import { useAuth } from "../context/AuthContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

function DashboardPage(props) {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/users/${user.StudentID}`
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(userInfo);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-[75%] h-full bg-[rgb(244,250,254)]">
        <Dashboard userInfo={userInfo} />
      </div>
      <div className="w-[25%] h-full">
        <Sidebar userInfo={userInfo} />
      </div>
    </div>
  );
}

export default DashboardPage;
