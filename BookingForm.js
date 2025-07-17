import React, { useState } from "react";

const BookingForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({
      fullName,
      email,
      phoneNumber,
      date,
      times,
      guests,
      occasion,
    });
  };

  const handleDateChange = (value) => {
    setDate(value);
    if (props.dispatch) {
      props.dispatch(value);
    }
  };

  return (
    <header className="booking-header-container">
      <section className="booking-header-section">
        <h1 className="booking-header">Make A Reservation</h1>
        <p className="booking-description">
          Please fill in the form below to make a reservation at the Little Lemon Chicago Restaurant.
        </p>
      </section>

      <section className="booking-section">
        <form className="booking-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Customer Information</legend>
            <label htmlFor="full-name">Name:</label>
            <input
              id="full-name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
            />
            <label htmlFor="email-address">Email Address:</label>
            <input
              id="email-address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              id="phone-number"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              required
            />
          </fieldset>

          <fieldset>
            <legend>Reservation Details</legend>
            <label htmlFor="book-date">Choose Date:</label>
            <input
              id="book-date"
              type="date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
              required
            />
            <label htmlFor="book-time">Choose Time:</label>
            <select
              id="book-time"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              required
            >
              <option value="">Select Time</option>
              {props.availableTimes.availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <label htmlFor="book-guests">Number of Guests:</label>
            <select
              id="book-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            >
              <option value="">Select Number</option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <label htmlFor="book-occasion">Occasion:</label>
            <select
              id="book-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
            </select>
          </fieldset>

          <div className="btn-container">
            <button type="submit" className="confirm-btn">
              Confirm Reservation
            </button>
          </div>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;




