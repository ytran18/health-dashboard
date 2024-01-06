import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup.js";
import LoginPage from "./pages/Login.js";
import DashboardPage from "./pages/Dashboard.js";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <LoginPage
              setStudentId={setStudentId}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
