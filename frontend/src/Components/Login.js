import React, { useState } from 'react'
import axios from 'axios'
import {NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../styles/signup.css'
function Login() {
  const navigate = useNavigate()
  const[user,setuser] = useState({email:"",password:""})
  const handleChange=(e)=>{
    const helper = {...user}
    helper[e.target.name]=e.target.value
    setuser(helper)
  }
  const location = useLocation();
  const handleSubmit =(e)=>{
    e.preventDefault();
    (location.pathname ==='/user/login') ? 
        (axios.post("/user/login",{email:user.email,password:user.password})
        .then(res=>{
          console.log(res.data)
          if(Object.keys(res.data).length>0){
            localStorage.setItem("usermail",user.email)
            localStorage.setItem("username",res.data.username)
            navigate("/user/flights")
          }
          else{
            alert("Invalid Credentials")
          }
        })
        .catch(err=>{
          console.log(err)
        })
        )  
        :
        ((axios.post("/admin/login",{email:user.email,password:user.password})
        .then(res=>{
          console.log(Object.keys(res.data).length)
          if(Object.keys(res.data).length>0){
            localStorage.setItem("usermail",user.email)
            navigate("/admin/flights")
          }
          else{
            alert("Invalid Credentials")
          }
        })
        .catch(err=>{
          console.log(err)
        })
        ))                                 
  }
  return (
    <div className='signup'>
    <form className='signup-form'>
      <div className="form-group">
        <label htmlFor="email" className="label">
          Username:
        </label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="label">
          Password:
        </label>
        <input type="password" name ="password" value={user.password} onChange={handleChange} />
      </div>
      <button type="button" onClick={handleSubmit} className="submit-btn">Login</button>
      {location.pathname ==='/user/login' &&
        <p>Not have a account ?<NavLink to="/user/signup">Signup</NavLink></p>
      }
    </form>
  </div>
  )
}

export default Login
