import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'
function Home() {
    const navigate = useNavigate()
    localStorage.clear()
  return (
    <>
        <div class="img"></div>
              <div class="center">
                <div class="title">Let's go! </div>
                <div class="sub_title">Make your dreams a reality.</div>
                <div class="btns">
                  <button>Learn More</button>
                  <button onClick={()=>navigate("/loginpage")}>Log In</button>
              </div>
        </div>
    </>
  )
}

export default Home;
