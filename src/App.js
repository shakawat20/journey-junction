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
// import Registration from './components/registration/Registration';

function App() {
  return (
    <div className="pl-2 pr-2 m-2">
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/destination/:id' element={<Destination></Destination>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/registration' element={<Registration></Registration>} />
      
      </Routes>
      <Footer></Footer>
  
    </div>
  );
}

export default App;
