import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/mybookings.css'
function MyBookings() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const searchMail = localStorage.getItem("usermail")

    axios.post("/bookings/get", { mail: searchMail })
      .then(res => {
        console.log(res)            
        setTickets(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const content = tickets.map((x) => (
    <div key={x._id} className="ticket card">
      <div className="flight-name">
        <div className="label">Flight Name</div>
        <div className="value">{x.flight_name}</div>
      </div>
      <div className="flight-no">
        <div className="label">Flight No.</div>
        <div className="value">{x.flight_no}</div>
      </div>
      <div className="arrival-station">
        <div className="label">Arrival Station</div>
        <div className="value">{x.arrival_at}</div>
      </div>
      <div className="departure">
        <div className="label"> Departure</div>
        <div className="value">{x.departure_at}</div>
      </div>
      <div className="arrival-time">
        <div className="label">Arrival Time</div>
        <div className="value">{x.arrival_time}</div>
      </div>
      <div className="departure-time">
        <div className="label">Departure Time</div>
        <div className="value">{x.depart_time}</div>
      </div>
      <div className="num-tickets">
        <div className="label">Number of Tickets</div>
        <div className="value">{x.tickets}</div>
      </div>
      <div className="num-tickets">
            <div className="label">Booked On</div>
            <div className="value">{x.booked_date}</div>
        </div>
    </div>
  ))

  return (
    <div className="my-bookings">
      {content}
    </div>
  )
}

export default MyBookings
