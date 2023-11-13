import React, { useState } from 'react';
import img1 from '../../img/pexels-josé-luis-photographer-2564843.jpg';
import img2 from '../../img/pexels-juliana-chyzhova-2648989.jpg';
import img3 from '../../img/pexels-nextvoyage-1518500.jpg';
import img4 from '../../img/pexels-juliana-chyzhova-2648989.jpg';
import img5 from '../../img/pexels-maria-isabella-bernotti-1049298.jpg';
import img6 from '../../img/pexels-miro-alt-176400.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Destinations from './Destinations';


const Home = () => {

    const [searchInput, setSearchInput] = useState('');
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
    });

    const handleSearch = () => {
        // Logic to handle the search based on 'searchInput'
        // This could be a fetch call or filtering available destinations
    };

    const handleBooking = () => {
        // Logic to handle booking - save to localStorage
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        // Redirect to login if not logged in
        // Logic for redirection
    };







    return (
        <div className='h-full border pr-4'>
            <div className='flex justify-center items-center h-96 mt-2'>

                <div className='flex pl-10'>
                    <div>
                        <h1 className='text-3xl font-bold ml-10 mt-10'>
                            Travel the world like <br /> never before and <br /> get better taste
                        </h1>
                        <h1 className='w-48 ml-10 mt-4 text-1xl'>
                            Don't wait until tomorrow discover your adventure now and feel the sensation of closeness to nature around you to get the best of your adventure.
                        </h1>
                    </div>

                    <button className="btn btn-outline btn-info relative top-80 right-56">Explore</button>

                    <div className='flex'>
                        <img className='border border-sky-500 rounded-md' src={img1} alt="" style={{ width: "550px" }} />

                        <img className='w-64 mt-9 relative top-1 ml-14 border border-sky-500 rounded-md' src={img2} alt="" />
                    </div>
                </div>

            </div>
            {/* <div className="booking-form flex justify-center items-center border-4 rounded " style={{ width: "400px", height: "60px", position: "absolute", left: "600px", top: "120px" }}>
                <input
                    className='border h-8 m-3 rounded pl-3'
                    type="text"
                    placeholder="Destination"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                />

                <button style={{ color: "white" }} onClick={handleBooking}>search</button>
            </div> */}

            <div className='m-3 flex '>
                <div className='flex items-center' style={{ height: "600px" }}>
                    <div>
                        <img src={img3} className='m-3 rounded-md' style={{ height: "200px", width: "350px" }} alt="" />
                        <img src={img4} className='m-3 rounded-md' style={{ height: "200px", width: "350px" }} alt="" />
                    </div>
                    <div>
                        <img src={img5} className='m-3 rounded-md' style={{ height: "230px", width: "350px" }} alt="" />
                        <img src={img6} className='m-3 rounded-md' style={{ height: "230px", width: "350px" }} alt="" />
                    </div>
                </div>
                <div className='p-4 pt-12 box-border ml-5' style={{ height: "600px", width: "600px" }}>
                    <h1 className='text-3xl font-bold ml-10 mt-10'>
                        We Recommend Beautiful <br /> Destinations Every Month
                    </h1>
                    <p className='mt-5 pl-5 text-2xl'>
                        Journey Junction is one of the most popular travel agencies for those who want to explore the world and try to make an adventure. We can provide beautiful destinations around the world and make your trip.
                    </p>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Experience</div>
                            <div className="stat-value">31 years</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Destinations Traveled</div>
                            <div className="stat-value">25k</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Happy Clients</div>
                            <div className="stat-value">65k</div>
                        </div>
                    </div>
                </div>
            </div>

            <Destinations></Destinations>








        </div>
    );
};

export default Home;
