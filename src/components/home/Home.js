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
        <div >


            <div className='h-full border pr-4 mt-3'   >
                <div className='flex flex-wrap justify-center items-center' >

                    <div className='flex flex-col md:flex-row pl-10 ' >

                        <div className='md:w-1/2 pt-10 ' style={{ height: "100%" }}>
                            <h1 className='text-5xl font-bold mb-9'>
                                Travel the world like <br /> never before and <br /> get better taste
                            </h1>
                            <h1 className='text-3xl mb-10'>
                                Don't wait until tomorrow discover your adventure now and feel the sensation of closeness to nature around you to get the best of your adventure.
                            </h1>

                            <button className="btn btn-outline btn-info mt-5">Explore</button>
                        </div>

                        <div className='md:w-1/2 mt-6 md:mt-0 grid grid-cols-1' >
                            <img style={{ height: "80%", width: "100%" }} className='border border-sky-500 rounded-md object-cover'
                                src="https://images.pexels.com/photos/2564843/pexels-photo-2564843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Travel 1" />
                        </div>

                    </div>

                </div>



                <div className='lg:m-3 lg:flex md:grid-cols-1 sm:grid-cols-2'>
                    <div className='flex items-center' style={{ height: "600px", width: "100%" }}>
                        <div>
                            <img src="https://images.pexels.com/photos/1518500/pexels-photo-1518500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='m-3 rounded-md' style={{ height: "200px", width: "350px" }} alt="" />
                            <img src="https://images.pexels.com/photos/2648989/pexels-photo-2648989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='m-3 rounded-md' style={{ height: "200px", width: "350px" }} alt="" />
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='m-3 rounded-md' style={{ height: "230px", width: "350px" }} alt="" />
                            <img src="https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='m-3 rounded-md' style={{ height: "230px", width: "350px" }} alt="" />
                        </div>
                    </div>
                    <div className='lg:p-4 lg:pt-12 box-border lg:ml-5 sm:grid-cols-1' style={{ width: "100%" }}>
                        <h1 className='text-3xl font-bold ml-10 mt-10'>
                            We Recommend Beautiful <br /> Destinations Every Month
                        </h1>
                        <p className='mt-5 text-2xl text-center flex-wrap' >
                            Journey Junction is one of the most popular travel agencies for those who want to explore the world and try to make an adventure. We can provide beautiful destinations around the world and make your trip.
                        </p>
                        <div className=" shadow md:grid md:grid-cols-3 sm:grid-cols-1">
                            <div className="stat md:border-r-2 md:pr-4">
                                <div className="stat-title">Experience</div>
                                <div className="stat-value">31 years</div>
                            </div>
                            <div className="stat md:border-r-2 md:pr-4">
                                <div className="stat-title">Destinations Traveled</div>
                                <div className="stat-value">25k</div>
                            </div>
                            <div className="stat md:border-r-2 md:pr-4">
                                <div className="stat-title">Happy Clients</div>
                                <div className="stat-value">65k</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div >
                    <Destinations></Destinations>
                </div>




            </div>
        </div>
    );
};

export default Home;
