import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking"; // ✅ ADD THIS

const Main = (props) => {
  const seedRandom = function (seed) {
    let m = 2 ** 35 - 31;
    let a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (dateInput) {
  const date = new Date(dateInput); // ensure it's a Date object
  let result = [];
  let random = seedRandom(date.getDate());
  for (let i = 17; i <= 21; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() > 0.5) result.push(i + ":30");
  }
  return result;
};


  const submitAPI = function (formData) {
    return true;
  };

  const updateTimes = (state, date) => {
    return { availableTimes: fetchAPI(date) };
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header {...props} />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
              {...props}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
