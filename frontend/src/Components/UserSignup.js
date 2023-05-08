import React, { useState } from 'react';
import '../styles/signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function UserSignup() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    usermail: '',
    password: "",
  });

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/user/signup",{name : formData.username , password : formData.password , email :formData.usermail})
    .then(res=>{
      console.log(res.data)
      navigate("/user/login");
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (
    <div className="signup">
        
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="usermail" className="label">
            Email
          </label>
          <input
            type="email"
            id="usermail"
            name="usermail"
            value={formData.usermail}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="submit-btn">Sign up</button>
      </form>
    </div>
  );
}

export default UserSignup;
