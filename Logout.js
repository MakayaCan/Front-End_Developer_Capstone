import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div className="logout-container">
      <h1>You have successfully logged out!</h1>
      <button className="home-btn" onClick={() => navigate("/")}>Back to Homepage</button>
    </div>
  );
};

export default Logout;
