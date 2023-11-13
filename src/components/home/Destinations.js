import React, { useEffect } from 'react';
import turkey from '../../img/turkey.jpg'
import france from '../../img/france.jpg'
import usa from '../../img/usa.jpg'
import uk from '../../img/uk.jpg'
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
    const navigate = useNavigate()


    const destination = [

        {
            img: turkey,
            place: "Turkiye",
            travelers: "14,000 travelers"
        },
        {
            img: france,
            place: "Thailand",
            travelers: "25,000 travelers"
        },
        {
            img: usa,
            place: "USA",
            travelers: "23,000 travelers"
        },
        {
            img: uk,
            place: "UK",
            travelers: "28,000 travelers"
        }




    ]
   

    return (
        <div className='flex mt-8 mb-8'>
            {
                destination.map(data => <div className="card w-96 bg-base-100 shadow-xl ml-5 ">
                    <figure><img src={data.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.place}</h2>
                        <p>{data.travelers}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={
                                () =>{ 
                                    navigate(`/destination/${data.place}`)     
                                }
                              
                                }>Booking</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Destinations;