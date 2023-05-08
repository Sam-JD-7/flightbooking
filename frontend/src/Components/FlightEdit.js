import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/style.css';
function FlightEdit() {
  const navigate = useNavigate()
  const location = useLocation();
  const [flight, setFlight] = useState(location.state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(e.target.name==="total_seats" && e.target.value<60){

    }
    else{
      setFlight(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/flights/edit', {
      id : flight.id,
      flight_no : flight.flight_no,
      flight_name : flight.flight_name,
      arrival_at : flight.arrival_at,
      depart_at : flight.depart_at,
      arrival_time : flight.arrival_time,
      depart_time : flight.depart_time,
      total_seats : flight.total_seats,
      available_seats : flight.total_seats,
      ticket_price : flight.ticket_price,
      date : flight.date
    })
    .then(res=>{
      console.log(res)
      navigate('/admin/flights')
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (
    <div>
      <h1>Edit Flight</h1>
      <form className='flight-form' onSubmit={handleSubmit}>
        <label htmlFor="flight_name">
          Flight Name:
        </label>
          < input style={{width:"100%"}} type="text" name="flight_name" value={flight.flight_name} onChange={handleChange} />
        
        <label htmlFor="flight_no">
          Flight No.:
        </label>
          < input style={{width:"100%"}} type="text" name="flight_no" value={flight.flight_no} onChange={handleChange} />
        
        <label htmlFor="arrival_at">
          From:
        </label>
          < input style={{width:"100%"}} type="text" name="arrival_at" value={flight.arrival_at} onChange={handleChange} />
        
        <label htmlFor="depart_at">
          To:
        </label>
          < input style={{width:"100%"}} type="text" name="depart_at" value={flight.depart_at} onChange={handleChange} />
        
        <label htmlFor="date">
          Date:
        </label>
        <input type="date" id="date" name="date" value={flight.date} onChange={handleChange} className="date-input" />


        <label htmlFor="arrival_time">
          Arrival Time:
        </label>
          < input style={{width:"100%"}} type="time" name="arrival_time" value={flight.arrival_time} onChange={handleChange} />
        
        <label htmlFor="depart_time">
          Departure Time:
        </label>
          < input style={{width:"100%"}} type="time" name="depart_time" value={flight.depart_time} onChange={handleChange} />
        
        <label htmlFor="">
          Capacity:
        </label>
          < input style={{width:"100%"}} type="number" name="total_seats" value={flight.total_seats} onChange={handleChange} />
        
        <label htmlFor="">
          Ticket Price:
        </label>
          < input style={{width:"100%"}} type="number" name="ticket_price" value={flight.ticket_price} onChange={handleChange} />
        
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default FlightEdit;
