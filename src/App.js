import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Destination from './components/destination/Destination';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';

import Registration from './components/registration/Registration';
import React, { createContext, useEffect, useState } from 'react';

import Dashboard from './components/dashboard/Dashboard'
import MyDestination from './components/dashboard/myDestination/MyDestination'
import PaymentInfo from './components/payment/PaymentInfo';



export const MyContext = createContext();
function App() {

  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch('https://journey-junction-server.vercel.app/destination')
      .then(res => res.json())
      .then(data => {
        setDestination(data)
      })
  }, [])

  return (
    <div>
      <MyContext.Provider value={destination}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/destination/:id' element={<Destination></Destination>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/registration' element={<Registration></Registration>} />
          {/* <Route path='/dashboard' element={<Dashboard><Dashboard/>}>
            <Route path='/dashboard/myDestination' element={ <MyDestination></MyDestination>} />
          </Route> */}
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route path='/dashboard' element={<MyDestination></MyDestination>} />
            <Route path='/dashboard/paymentInfo' element={<PaymentInfo></PaymentInfo>} />

          </Route>

        </Routes>
        <Footer></Footer>
      </MyContext.Provider>



    </div>
  );
}

export default App;
