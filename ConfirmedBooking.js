import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="confirm">
      <h1>Booking has been <span>confirmed!</span></h1>
      <button className="back-btn" onClick={handleBackClick}>
        Back to Homepage
      </button>
    </div>
  );
};

export default ConfirmedBooking;
