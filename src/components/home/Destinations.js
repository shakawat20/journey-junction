import React, { useEffect } from 'react';

import france from '../../img/france.jpg'
import usa from '../../img/usa.jpg'

import { useNavigate } from 'react-router-dom';

const Destinations = () => {
    const navigate = useNavigate()


    const destination = [

        {
            img: "https://media.worldnomads.com/Explore/middle-east/hagia-sophia-church-istanbul-turkey-gettyimages-skaman306.jpg",
            place: "Turkiye",
            travelers: "14,000 travelers"
        },
        {
            img: "https://www.salamair.com/images/des1/bangkok.jpg",
            place: "Thailand",
            travelers: "25,000 travelers"
        },
        {
            img: "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?size=626&ext=jpg&ga=GA1.1.954288977.1698596102&semt=ais",
            place: "USA",
            travelers: "23,000 travelers"
        },
        {
            img: "https://thriftypassport.com/wp-content/uploads/2023/10/UK.jpg",
            place: "UK",
            travelers: "28,000 travelers"
        }




    ]


    return (
        < div className='grid  lg:grid-cols-4 md:grid-cols-2 justify-center items-center' style={{width:"100%" }}>
            {
                destination.map(data =>
                    <div className='ml-2 mb-1'>
                        <div className="card bg-base-100 shadow-xl " style={{ width:"100%"}}>
                            <figure><img src={data.img} alt="Shoes" style={{ width: '100%', height: '350px', objectFit: 'cover' }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.place}</h2>
                                <p>{data.travelers}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={
                                        () => {
                                            navigate(`/destination/${data.place}`)
                                        }

                                    }>Booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Destinations;