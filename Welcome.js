import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Welcome = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="welcome-container">
      <h1>Hello, {username}!</h1>
      <p>Welcome to Little Lemon!</p>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
