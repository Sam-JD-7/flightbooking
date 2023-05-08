import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/style.css'
import Popup from './PopUp';
function UserFlights() {
    const[list,setList] = useState([])
    const[showPopup,setShowPopup] = useState(false)
    const[book,setBook] = useState(false)
    const[tickets,setTickets] = useState(0)
    const[filter,setFilter] = useState(false)
    const[search,setSearch] = useState({
      date:"",
      st_time:"",
      end_time:""
    })
    useEffect(()=>{
        axios.get("/flights/all")
        .then(res=>{
            setList(res.data);
        })
        .catch(err=>{
          console.log(err)
        })
    },[])
    const handleBooking =(x)=>{
        setBook(false)
        axios.post("/bookings/add",{
          passenger_name : localStorage.getItem("username"),
          passenger_mail : localStorage.getItem("usermail"),
          flight_name :x.flight_name,
          flight_no : x.flight_no,
          arrival_at : x.arrival_at,
          departure_at : x.depart_at,
          arrival_time : x.arrival_time,
          depart_time : x.depart_time,
          tickets : tickets
        })
        .then(res=>{
          console.log(res.data)
          axios.put("/flights/edit",{id:x._id,...x,available_seats:x.available_seats-tickets})
          .then(res=>{
            setList(res.data)
            alert("Booked successfully...")
          })
          .catch(err=>{
            console.log(err)
          })
        })
        .catch(err=>{
          console.log(err)
        })
    }
    const handleSubmit = async(value) => {
      await setTickets(value)
      console.log(tickets)
      setShowPopup(false);
      setBook(true)
    };
  
    const handleCancel = () => {
      setShowPopup(false);
    };

    var content = list.map((x)=>
      <tr key={x._id}>
          <td>{x.flight_name}</td>
          <td>{x.flight_no}</td>
          <td>{x.arrival_at}</td>
          <td>{x.depart_at}</td>
          <td>{x.arrival_time}</td>
          <td>{x.depart_time}</td>
          <td>{x.available_seats}</td>
          <td>{x.ticket_price}</td>
          <td><button onClick={()=>setShowPopup(true)}>Book Now</button></td>
          {showPopup && <Popup onSubmit={handleSubmit} onCancel={handleCancel}/>}
          {book && handleBooking(x)}
      </tr>
    )

    const handleChange = (e) => {
      setSearch(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSearch =() => {
      setFilter(false)
      axios.post("/flights/get",{date : search.date , st_time :search.st_time , end_time : search.end_time})
        .then(res=>{
            setList(res.data);
        })
        .catch(err=>{
          console.log(err)
        })
    }
    const handleClear =() => {
      setSearch({date:"",
      st_time:"",
      end_time:""
    })
      axios.get("/flights/all")
        .then(res=>{
            setList(res.data);
        })
        .catch(err=>{
          console.log(err)
        })
    }
  return (
    <div>  
      <nav>
        <NavLink to="/mybookings">My Bookings</NavLink>
        <NavLink to='/'>Logout</NavLink>
      </nav>
      <div>
        <button style={{marginRight:"2%",width:"5%"}} onClick={handleClear}>All</button>
        {!filter && <button onClick={()=>setFilter(true)}>Apply Filter</button>}
        {filter &&<>
            <label>Date</label>
            <input type="date" name="date" value={search.date} onChange={handleChange} ></input>
            {/* <input type ="time" name="st_time" value={search.st_time} onChange={handleChange}></input>
            <input type ="time" name="end_time" value={search.end_time} onChange={handleChange}></input> */}
            <button onClick={handleSearch}>Apply</button>
            </>
        }
      </div>
      <table>
        <thead>
          <th>Flight Name</th>
          <th>Flight No.</th>
          <th>From</th>
          <th>To</th>
          <th>Arrive At</th>
          <th>Depart At</th>
          <th>Available Seats</th>
          <th>Ticket Price</th>
          <th>Booking</th>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </div>
  )
}

export default UserFlights;
