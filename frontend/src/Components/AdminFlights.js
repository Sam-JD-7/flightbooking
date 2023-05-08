import React, { useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function AdminFlights() {
    const navigate = useNavigate()
    const[list,setList] = useState([])
    useEffect(()=>{
        axios.get("/flights/all")
        .then(res=>{
            setList(res.data);
        })
        .catch(err=>{
          console.log(err)
        })
    },[])

    const handleEdit =(id,fname,fno,arrival_at,depart_at,arrival_time,depart_time,total_seats,available_seats,ticket_price,date) =>{
        navigate('/flight/edit',
            {state :{
                    id : id,
                    flight_name : fname,
                    flight_no :fno,
                    arrival_at : arrival_at,
                    depart_at : depart_at,
                    arrival_time : arrival_time,
                    depart_time : depart_time,
                    total_seats : total_seats,
                    available_seats : available_seats,
                    ticket_price : ticket_price,
                    date : date
                }
            },{replace:true})
    }

    const handleRemove =(id)=>{
        axios.delete('/admin/removeflight',{
            params : {
                id : id
            }
        })
        .then(res => {
            console.log(res)
            setList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleBookings =(x)=>{
        navigate('/admin/bookings',{state:{flight_no:x.flight_no}})
    }

    var content = list.map((x)=>
      <tr key={x._id}>
          <td>{x.flight_name}</td>
          <td>{x.flight_no}</td>
          <td>{x.arrival_at}</td>
          <td>{x.depart_at}</td>
          <td><button onClick={()=>handleEdit(x._id,x.flight_name,x.flight_no,x.arrival_at,x.depart_at,x.arrival_time,x.depart_time,x.total_seats,x.available_seats,x.ticket_price,x.date)}>View /Edit</button></td>
          <td><button onClick={()=>handleRemove(x._id)}>Remove</button></td>
          <td><button onClick={()=>handleBookings(x)}>View</button></td>
      </tr>
    )
  return (
    <div>
        <nav>
            <NavLink to='/addflight'>Add Flight</NavLink>
            <NavLink to='/'>Logout</NavLink>
        </nav>
        <table>
            <thead>
                <th>Flight Name</th>
                <th>Flight No.</th>
                <th>From</th>
                <th>To</th>
                <th>View/Edit</th>
                <th>Remove</th>
                <th>View Bookings</th>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    </div>
  )
}

export default AdminFlights
