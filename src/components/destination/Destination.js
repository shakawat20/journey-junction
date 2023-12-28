import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import img from '../../img/youtube.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../../App';
import { v4 as uuidv4 } from 'uuid';


const Destination = () => {
    const destination = useContext(MyContext)
    const [cardId, setCardId] = useState();
    const [combine, setCombine] = useState();
    const bookingId = uuidv4();
    const [showModal, setShowModal] = useState(false);

    let { id } = useParams();
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();
    // const [destination, setDestination] = useState([]);
    const countryInfo = destination.find(x => x.countryName === id);
    const notify = () => toast("Add to my destination");



    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount
    }, []);



    const [formData, setFormData] = useState({

        name: user?.displayName,
        email: user?.email,
        phone: '',
        desired_date: '',

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        

        const newCombine = {
            uniqueId: bookingId,
            id: countryInfo?._id,
            countryName: countryInfo?.countryName,
            place: cardId,
        };

        setCombine(newCombine);

        let storedData = JSON.parse(localStorage.getItem('user')) || [];
        storedData = Array.isArray(storedData) ? storedData : [];

        localStorage.setItem('user', JSON.stringify([...storedData, newCombine]));

        notify();

        setFormData({
            name: user?.displayName,
            email: user?.email,
            phone: '',
            desired_date: '',
        });

    };

    // console.log(countryInfo?.card[0])
  
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    if (!countryInfo) {
        return (

            <div>
                Loading
            </div>

        )

    }


    return (
        <div className='sm:grid-cols-1'>

            <div style={{ position: 'sticky', top: 0, zIndex: 10005 }}>
                <ToastContainer />
            </div>


            <div>
                <div className="hero" style={{
                    backgroundImage: `url(${countryInfo?.poster})`,
                    width: "100%",
                    height: "350px", // Adjust this height as needed
                }}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-white text-5xl font-bold">{countryInfo?.countryName}</h1>
                            <p className="mb-5 text-gray">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:mt-8 lg:mb-8 sm:grid-cols-1' style={{ height: "410px" }}>
                {
                    countryInfo?.card.map((y, index) =>
                        <div className="card card-compact w-96 m-3 bg-base-100 shadow-xl">
                            <figure><img src={y.img} alt="Shoes" className=' rounded' style={{ height: "250px", width: "350px" }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{y.title}</h2>
                                <p>{y.description}</p>
                                <p>{y.price} $</p>

                                <div className="card-actions justify-end">
                                    {user ? (
                                        <label htmlFor="my_modal_6" className="btn" onClick={() => setCardId({
                                            cardId: index,
                                            price: y?.price

                                        })} >Booking</label>
                                    ) : (
                                        <label htmlFor="my_modal_6" className="btn" onClick={() => navigate('/login', { state: { from: location }, replace: true })}>Booking</label>
                                    )}

                                </div>
                            </div>
                        </div>)
                }
            </div>





            <div style={{ position: 'sticky', top: 0, zIndex: 10001 }} >
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box">


                        <div>
                            <form onSubmit={handleRegister} method="post" className={`flex items-center justify-center `}>

                                <div className="bg-white p-1 rounded w-96">
                                    <h2 className="text-2xl font-semibold">Destination Form</h2>
                                    <br /><br />
                                    <label htmlFor="name" className="block text-gray-700">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <br /><br />
                                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <br /><br />
                                    <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <br /><br />
                                    <label htmlFor="desired_date" className="block text-gray-700">Desired Date:</label>
                                    <input
                                        type="date"
                                        id="desired_date"
                                        name="desired_date"
                                        value={formData.desired_date}
                                        onChange={handleInputChange}
                                        className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <br /><br />




                                    <input


                                        type="submit"
                                        value="Submit"
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                                    />


                                </div>


                            </form>

                        </div><div className="modal-action ">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>



                    </div>
                </div>
            </div>


            {/* You can open the modal using document.getElementById('ID').showModal() method */}




            <h1 className="text-3xl font-bold mb-3">Travel Destination</h1>
            <h1 className="cursor-pointer" onClick={openModal} style={{ position: "relative", top: "220px", fontSize: "20px", color: "white", textAlign: "center" }}>Click on this</h1>
            <img
                src={img}
                alt="Destination"
                onClick={openModal}
                className="cursor-pointer"
                style={{ width: "1500px", height: "400px", borderRadius: "7px" }}
            />
            <div>

                <Modal
                    style={{
                        overlay: {
                            zIndex: 10 // Adjust this value to be higher than the z-index of your dropdown menu
                        },
                        content: {
                            zIndex: 10,// Adjust this value to be higher than the z-index of your dropdown menu

                        }
                    }}
                    isOpen={showModal}
                    onRequestClose={closeModal}
                    contentLabel="Travel Destination Modal"
                    ariaHideApp={false} // To avoid accessibility issues
                >
                    <div className="bg-white p-4"  >
                        <span
                            className="absolute top-0 right-0 cursor-pointer text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </span>
                        <iframe


                            title="Destination Video"
                            width="1400"
                            height="545"
                            src="https://www.youtube.com/embed/Y7IoPLxJP1Y?si=nkirK-V9FqSodYpS"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Modal>
            </div>




            <div className='lg:text-2xl lg:m-8 lg:flex lg:mr-3 sm:grid sm:grid-cols-1'>
                <div>
                    <h1 className='font-bold ' >
                        About {
                            countryInfo?.countryName
                        }
                    </h1><br />
                    <div style={{ width: "700px", fontFamily: "Times New Roman", textAlign: "center" }}>
                        {
                            countryInfo?.information
                        }
                    </div>
                </div>


                <img className='border rounded-md ml-3' style={{ width: "670px", height: "600px" }} src={countryInfo?.verticalImg} alt="" />
            </div>

        </div>
    );
};

export default Destination;