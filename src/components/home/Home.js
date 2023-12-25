import React, { useState } from 'react';
import Destinations from './Destinations';


const Home = () => {

  
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
        <div className='h-full border pr-4 sm:grid-cols-1'>
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

                    <div className=' lg:flex md:grid-cols-1' >
                        <img className='border border-sky-500 rounded-md' src="https://images.pexels.com/photos/2564843/pexels-photo-2564843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt="" style={{ width: "550px" }} />

                        <img className='w-64 mt-9 relative top-1 ml-14 border border-sky-500 rounded-md' src="https://images.pexels.com/photos/2648989/pexels-photo-2648989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>

            </div>
        

            <div className='lg:m-3 lg:flex md:grid-cols-1 sm:grid-cols-2'>
                <div className='flex items-center' style={{ height: "600px" }}>
                    <div>
                        <img src="https://images.pexels.com/photos/1518500/pexels-photo-1518500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='m-3 rounded-md' style={{ height: "200px", width: "350px" }} alt="" />
                        <img src="https://images.pexels.com/photos/2648989/pexels-photo-2648989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='m-3 rounded-md' style={{ height: "200px", width: "350px" }} alt="" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='m-3 rounded-md' style={{ height: "230px", width: "350px" }} alt="" />
                        <img src="https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='m-3 rounded-md' style={{ height: "230px", width: "350px" }} alt="" />
                    </div>
                </div>
                <div className='lg:p-4 lg:pt-12 box-border lg:ml-5 sm:grid-cols-1' style={{ height: "600px", width: "600px" }}>
                    <h1 className='text-3xl font-bold ml-10 mt-10'>
                        We Recommend Beautiful <br /> Destinations Every Month
                    </h1>
                    <p className='mt-5 pl-5 text-2xl'>
                        Journey Junction is one of the most popular travel agencies for those who want to explore the world and try to make an adventure. We can provide beautiful destinations around the world and make your trip.
                    </p>
                    <div className="stats shadow sm:grid-cols-1">
                        <div className="stat">
                            <div className="stat-title">Experience</div>
                            <div className="stat-value">31 years</div>
                        </div>
                        <br></br>
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
