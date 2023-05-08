import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import LoginAs from './Components/LoginAs';
import Login from './Components/Login';
import UserFlights from './Components/UserFlights';
import FlightEdit from './Components/FlightEdit';
import AdminFlights from './Components/AdminFlights';
import AddFlight from './Components/AddFlight';
import MyBookings from './Components/MyBookings';
import UserSignup from './Components/UserSignup';
import AdminBookings from './Components/AdminBookings';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/loginpage" element={<LoginAs/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path='/user/flights' element={<UserFlights/>}/>
        <Route path='/admin/flights' element={<AdminFlights/>}/>
        <Route path='/flight/edit' element={<FlightEdit/>}/>
        <Route path='/addflight' element={<AddFlight/>}/>
        <Route path='/mybookings' element={<MyBookings/>}/>
        <Route path="/user/signup" element={<UserSignup/>}/>
        <Route path='/admin/bookings' element={<AdminBookings/>}/>
    </Routes>
    </div>
  );
}

export default App;
