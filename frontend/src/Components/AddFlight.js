import React, { useState } from 'react';
import axios from 'axios';
import '../styles/style.css'
import { useNavigate } from 'react-router-dom';

function AddFlight() {
  const navigate = useNavigate();
  const [flightDetails, setFlightDetails] = useState({
    flightName: '',
    flightNo: '',
    ticketPrice: '',
    availableSeats: 60,
    arrival: '',
    departure: '',
    date: '',
    arrivalTime: '',
    departureTime: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFlightDetails({ ...flightDetails, [name]: value });
    if((name==="availableSeats" && value<60)) setFlightDetails({...flightDetails, [name]: 60})

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/admin/addflight", {
        flight_no: flightDetails.flightNo,
        flight_name: flightDetails.flightName,
        arrival_at: flightDetails.arrival,
        depart_at: flightDetails.departure,
        arrival_time: flightDetails.arrivalTime,
        depart_time: flightDetails.departureTime,
        total_seats: flightDetails.availableSeats,
        avilable_Seats: flightDetails.availableSeats,
        ticket_price: flightDetails.ticketPrice,
        date: flightDetails.date,
    })
    .then(res => {
        console.log(res);
        navigate('/admin/flights');
    })
    .catch(err => {
        console.log(err);
    });
  };

  return (
    <form className="flight-form" onSubmit={handleSubmit}>
      <label htmlFor="flight-name">Flight Name:</label>
      <input type="text" id="flight-name" name="flightName" value={flightDetails.flightName} placeholder='Flight Name' onChange={handleInputChange} className="flight-name-input" />

      <label htmlFor="flight-no">Flight No:</label>
      <input type="text" id="flight-no" name="flightNo" value={flightDetails.flightNo} placeholder='Flight Number' onChange={handleInputChange} className="flight-no-input" />

      <label htmlFor="ticket-price">Ticket Price:</label>
      <input type="number" id="ticket-price" name="ticketPrice" value={flightDetails.ticketPrice} placeholder='Ticket Price' onChange={handleInputChange} className="ticket-price-input" />

      <label htmlFor="available-seats">Total Seats:</label>
      <input type="number" id="available-seats" name="availableSeats" value={flightDetails.availableSeats} placeholder='Total Seats' onChange={handleInputChange} className="available-seats-input" />

      <label htmlFor="arrival">Arrival:</label>
      <input type="text" id="arrival" name="arrival" value={flightDetails.arrival} placeholder='Arrival' onChange={handleInputChange} className="arrival-input" />

      <label htmlFor="departure">Departure:</label>
      <input type="text" id="departure" name="departure" value={flightDetails.departure} placeholder='Departure' onChange={handleInputChange} className="departure-input" />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={flightDetails.date} onChange={handleInputChange} className="date-input" />

      <label htmlFor="arrival-time">Arrival Time:</label>
      <input type="time" id="arrival-time" name="arrivalTime" value={flightDetails.arrivalTime} onChange={handleInputChange} className="arrival-time-input" />

      <label htmlFor="departure-time">Departure Time:</label>
      <input type="time" id="departure-time" name="departureTime" value={flightDetails.departureTime} onChange={handleInputChange} className="departure-time-input" />

      <button type="submit" className="submit-button">Add</button>
    </form>
  );
}

export default AddFlight;
