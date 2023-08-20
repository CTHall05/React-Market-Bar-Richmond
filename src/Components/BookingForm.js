// components/BookingForm.js

import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    numberOfPeople: '',
    workOrganization: '',
    email: '',
    mobileNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (send data to the backend, display a confirmation message, etc.)
    console.log(formData);
  };

  return (
    <div id="bookings" className="booking-form">
      <h2>Book the Bar</h2>
      <p>
        Have a work do planned? Birthday or special event? Fill out the form
        below and let's talk!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="booking-form-label">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="booking-form-label">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="booking-form-label">
          <label>Number of People:</label>
          <input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
          />
        </div>
        <div className="booking-form-label">
          <label>Work Organization (optional):</label>
          <input
            type="text"
            name="workOrganization"
            value={formData.workOrganization}
            onChange={handleChange}
          />
        </div>
        <div className="booking-form-label">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="booking-form-label">
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
