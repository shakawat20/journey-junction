import React, { useState } from 'react';
import Modal from 'react-modal';
import img from '../../img/youtube2.png'
import './About.css'

const About = () => {
    const aboutServices = [
        {
            title: "Tailored Odysseys",
            p: " Crafting Personalized Journeys for Every Adventurer",


        },
        {
            title: "Curated Wonders",
            p: " Handpicked Destinations for Unforgettable Experiences",


        },
        {
            title: "Endless Discovery",
            p: " Navigating the World with Insight and Expertise",


        },
        {
            title: "Your Travel Companion",
            p: "  Your Trusted Partner in Unveiling the World's Possibilities",


        },
        {
            title: "Memories Crafted",
            p: "  Creating Unforgettable Stories Through Travel",


        },
        {
            title: "Beyond Destination",
            p: " Redefining Travel Through Immersive Adventures",


        }

    ]

    return (
        <div >
            <div >
                <div className="hero" style={{
                    backgroundImage: `url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    width: "100%",
                    height: "250px", // Adjust this height as needed
                }}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-white text-5xl font-bold">About Us</h1>
                            <p className="mb-5 text-gray" style={{ fontFamily: "Times New Roman" }}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between" items-center'>
                <p className='font-bold text-3xl mt-5 text-center'>  Why you choose us?</p>
                <div id='journey' className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>



                    {aboutServices.map((service, index) => (
                        <div className="card w-96 bg-base-100 shadow-xl m-3 border" key={index}>
                            <figure></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <p>{service.p}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div id='about' className='flex mt-10 lg:flex-row md:flex-row sm:flex-col' >
                <iframe style={{ height: "500px", width: "100%"}} className='mt-3 h-96   rounded mb-3' width="560" height="315" src="https://www.youtube.com/embed/NcBjx_eyvxc?si=XEG0tEqd2Rgr1l9X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div style={{ width: "100%", paddingLeft: "30px" }}>
                    <div className='font-bold text-3xl'>
                        About Us
                    </div>
                    "Step into the extraordinary world of Journey Junction, an immersive travel website designed to redefine the way you experience the world. Our platform isn't just about showcasing destinations; it's a gateway to crafting transformative experiences. We meticulously curate a diverse tapestry of destinations, each chosen to ignite your sense of wonder and possibility. Through insightful guides, expert tips, and a passion for exploration, we aim to awaken the adventurer in you. Whether you long for the untouched beauty of remote landscapes, the vibrant pulse of bustling metropolises, or the tranquility of hidden paradises, Journey Junction is your key to unlocking a kaleidoscope of possibilities.
                    <br />
                    What sets us apart is our commitment to personalization. We understand that every traveler is unique, and so are their desires and aspirations. That's why we don't just offer trips; we design odysseys tailored specifically to your dreams. Our platform is your companion, your confidant, and your guide in navigating the vast realm of travel. From the moment you land on our page to the second you return from your expedition, we're devoted to ensuring your journey is nothing short of remarkable.
                    <br />
                    At Journey Junction, we believe in the transformative power of travel—the way it opens your eyes to new cultures, broadens your horizons, and deepens your understanding of the world. It's more than just a holiday; it's a catalyst for growth and self-discovery. Let us be the architects of your next adventure, the storytellers of your escapades, and the facilitators of memories that will linger long after you return. Join us as we embark on this odyssey together, where the destination is just a part of the incredible tale we'll craft."
                </div>
            </div>




        </div>
    );
};

export default About;

