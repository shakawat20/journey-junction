import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import img3 from '../../img/turkiye-3.jpg'
import img2 from '../../img/turkiye-2.jpg'
import img1 from '../../img/turkiye-1.jpg'
import img4 from '../../img/turkiye-4.jpg'
import img5 from '../../img/turkey.jpg'
import img6 from '../../img/turkiye vertical.jpg'
import Modal from 'react-modal';
import img from '../../img/youtube.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Destination = () => {
    let { id } = useParams();
    let location = useLocation();
    const notify = () => toast("Booked");

    const [user, loading, error] = useAuthState(auth);


    const [hidden, setHidden] = useState(true)

    const navigate = useNavigate()



    const [formData, setFormData] = useState({
        name: user?.displayName,
        email: user?.email,
        phone: '',
        desired_date: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        notify()
        console.log(formData); // This logs the form data
        // Here you can perform further actions, like sending the data to an API, state management, etc.
    };



    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const info = [
        {
            countryName: "Turkiye",
            poster: img3,
            verticalImg: img6,
            information: ` Turkey's beauty is a rich mosaic woven from a tapestry of historical marvels, natural wonders, and a vibrant cultural heritage. Its historical legacy echoes through the ancient ruins of Ephesus, Troy's enigmatic remnants, and the architectural splendor of Hagia Sophia. The country's natural landscape is equally mesmerizing, from the surreal fairy chimneys and cave dwellings of Cappadocia to the crystal-clear waters caressing the Mediterranean and Aegean coasts. This land is a canvas painted with diverse hues, from the lush greenery of the Black Sea region to the arid, lunar-like landscapes of central Anatolia.The warmth of the Turkish people and their innate hospitality further enriches the country's appeal, welcoming visitors to indulge in flavorful cuisine, explore bustling bazaars, and immerse themselves in a culture that beautifully amalgamates Eastern and Western influences. From the grandeur of historical monuments to the tranquility of coastal vistas, Turkey's multifaceted beauty is an enchanting symphony that harmonizes history, nature, and culture. `,

            card: [
                {
                    title: "Anna Berdnik",
                    img: img2,
                    description: " A talented contemporary artist known for her vibrant and surreal paintings that often explore themes of nature, emotion, and the human experience. "
                },
                {
                    title: "Guissepe Mandi",
                    img: img1,
                    description: "A celebrated chef renowned for innovative culinary creations that merge traditional techniques with avant-garde flavors."
                },
                {
                    title: "Ufuk Aslam",
                    img: img4,
                    description: "An  accomplished  musician recognized  for pushing  the boundaries  of classical  music."
                },
                {
                    title: "Hagia Sophia",
                    img: img5,
                    description: "An architectural marvel in Istanbul, Turkey, initially a Byzantine cathedral, later transformed into an Ottoman mosque and now a museum."
                }

            ]

        },
        {
            countryName: "Thailand",
            poster: "https://img.freepik.com/free-photo/long-boat-blue-water-maya-bay-phi-phi-island-krabi-thailand_335224-895.jpg?w=996&t=st=1699720891~exp=1699721491~hmac=3d0ef3897b52cc0ad9a6294fedb6cafc23ac30ec56ccaadb89fb76dab4e5a65e",
            verticalImg: "https://img.freepik.com/free-photo/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.jpg?w=996&t=st=1699720980~exp=1699721580~hmac=53b39c7f88a60f255fe62c7932c677e0c13b09542dbe0c400a517ad74c431396",
            information: ` Thailand, a tapestry of cultural opulence and natural grandeur, enchants visitors with its kaleidoscope of experiences. From the bustling streets of Bangkok, where modernity meets tradition in a vibrant collision of sights and sounds, to the serene, palm-fringed beaches along the Andaman Sea and Gulf of Thailand, the country offers a spectrum of experiences. The rich historical legacy is evident in the ancient ruins of Ayutthaya and Sukhothai, where temple ruins whisper tales of a glorious past. Thailand's cultural vibrancy is further accentuated by its festivals, including the dazzling Loy Krathong and Songkran, where traditions come alive in a riot of colors and celebrations. The warmth and friendliness of the Thai people, coupled with their delectable cuisine—bursting with flavors that range from fiery to subtly sweet—add to the allure. Amidst the emerald landscapes of the north's mountainous regions and the tranquility of its rural villages, Thailand's allure lies in this harmonious blend of historical richness, cultural vivacity, and natural splendor that beckons travelers from across the globe. `,

            card: [
                {
                    title: "Anna Berdnik",
                    img: " https://img.freepik.com/free-photo/pileh-blue-lagoon-phi-phi-island-thailand_231208-1487.jpg?w=996&t=st=1699721031~exp=1699721631~hmac=584a6414cf143f9aa67956bf4d4451b556bf7bbae333d4255b62f90771d65538",
                    description: " A talented contemporary artist known for her vibrant and surreal paintings that often explore themes of nature, emotion, and the human experience. "
                },
                {
                    title: "Guissepe Mandi",
                    img: "https://img.freepik.com/premium-photo/landmark-pagoda-doi-inthanon-with-mist-fog-during-sunset-timeat-chiang-mai-thailand_33835-815.jpg?w=1060",
                    description: "A celebrated chef renowned for innovative culinary creations that merge traditional techniques with avant-garde flavors."
                },
                {
                    title: "Ufuk Aslam",
                    img: "https://img.freepik.com/premium-photo/long-tail-boats-beach-thailand_163782-6151.jpg?w=740",
                    description: "An  accomplished  musician recognized  for pushing  the boundaries  of classical  music."
                },
                {
                    title: "Hagia Sophia",
                    img: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-839.jpg?w=996&t=st=1699721168~exp=1699721768~hmac=8bf222a4eaa3d42b9f67c97bbe414d70155f40fee59a931e108c6b37c0254a68",
                    description: "An architectural marvel in Istanbul, Turkey, initially a Byzantine cathedral, later transformed into an Ottoman mosque and now a museum."
                }

            ]

        },
        {
            countryName: "UK",
            poster: "https://img.freepik.com/free-photo/big-ben-houses-parliament-london-uk_268835-1400.jpg?w=996&t=st=1699722909~exp=1699723509~hmac=2829bddb1ada5e7f559d1d28a78054bc2dbaf696d8dd77bc168b37f015aacdc7",
            verticalImg: "https://img.freepik.com/free-photo/famous-tower-bridge-evening-london-england_268835-1390.jpg?w=996&t=st=1699722958~exp=1699723558~hmac=63b9bc6459cb449ae667c1f1e15fa44216ec4400eabe50901826374e4cf98a8d",
            information: `The United Kingdom, a mosaic of tradition and modernity, weaves together a rich historical tapestry with contemporary allure. Its capital, London, stands as a global hub, a melting pot of culture, art, and finance, where ancient landmarks like the Tower of London stand alongside modern architectural marvels. The countryside unfolds a picturesque landscape with rolling hills, quaint villages, and historic castles that echo tales of a bygone era. England's diverse regions, from the rugged beauty of the Lake District to the iconic white cliffs of Dover, offer a spectrum of natural beauty. Scotland's majestic highlands and the vibrant city life of Edinburgh, Wales with its lush valleys, and Northern Ireland's dramatic coastline all add to the UK's diverse charm. The UK's cultural heritage shines through its literary legacy, from the works of Shakespeare to the contemporary voices of Rowling and Atwood, while its music, art, and culinary delights further enrich the tapestry of this multifaceted nation, drawing in visitors with its blend of history, innovation, and scenic wonders. `,

            card: [
                {
                    title: "Anna Berdnik",
                    img: " https://img.freepik.com/free-photo/view-bridge-london-city_23-2149437452.jpg?w=360&t=st=1699723039~exp=1699723639~hmac=14872534d4f2e49abf412f42caf3c9e544034fd06effb3b0acfba6a91ac4d125",
                    description: " A talented contemporary artist known for her vibrant and surreal paintings that often explore themes of nature, emotion, and the human experience. "
                },
                {
                    title: "Guissepe Mandi",
                    img: "https://media.istockphoto.com/id/952375942/photo/westminster-parliament-big-ben-and-the-thames-with-blue-sky.jpg?s=2048x2048&w=is&k=20&c=6nFKIxbS4rbO7t9WnthghsNLV_yg-CNDjrHMAh1mVNU=",
                    description: "A celebrated chef renowned for innovative culinary creations that merge traditional techniques with avant-garde flavors."
                },
                {
                    title: "Ufuk Aslam",
                    img: "https://media.istockphoto.com/id/945110662/photo/millenium-bridge-and-st-pauls-cathedral-london-uk.jpg?s=2048x2048&w=is&k=20&c=ZM3UkgcHiVQOwmKdOAOLJ67qwW8D00q8eqwXVeFIK0I=",
                    description: "An  accomplished  musician recognized  for pushing  the boundaries  of classical  music."
                },
                {
                    title: "Hagia Sophia",
                    img: "https://img.freepik.com/free-photo/vertical-low-angle-shot-big-ben-london-blue-sky_181624-10493.jpg?w=360&t=st=1699723284~exp=1699723884~hmac=84a7be964a5d20857f63bd16030036501b83cc3df4cf0402ad3852915b635f11",
                    description: "An architectural marvel in Istanbul, Turkey, initially a Byzantine cathedral, later transformed into an Ottoman mosque and now a museum."
                }

            ]

        },
        {
            countryName: "USA",
            poster: "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=996&t=st=1699723616~exp=1699724216~hmac=60cf1575899fb67e936cea4ec8640b0d7248a84f918d07654cf80e79054b43c1",
            verticalImg: "https://hips.hearstapps.com/hmg-prod/images/harpers-ferry-west-virginia-royalty-free-image-1660073165.jpg?crop=1.00xw:0.733xh;0,0.0928xh&resize=1200:*",
            information: `The United States, a sprawling canvas of diversity and innovation, is a land of immense contrasts and endless possibilities. From the vibrant urban landscapes of cities like New York, Los Angeles, and Chicago to the serene, breathtaking beauty of national parks like Yellowstone and the Grand Canyon, the country boasts a staggering array of environments. Its cultural tapestry weaves together a multitude of influences, from the indigenous traditions of Native American tribes to the amalgamation of cultures brought by waves of immigrants. The United States stands as a global leader in technology, science, and entertainment, with Silicon Valley's innovation, NASA's space exploration, and Hollywood's cinematic magic capturing the world's imagination. Its history, marked by pivotal moments like the American Revolution, the Civil Rights Movement, and ongoing societal evolutions, shapes the nation's identity. The country's vastness allows for a diversity of experiences, from the sun-kissed beaches of California to the hustle of Wall Street in New York, creating a tapestry that celebrates individuality while fostering a collective American spirit. `,

            card: [
                {
                    title: "Anna Berdnik",
                    img: " https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: " A talented contemporary artist known for her vibrant and surreal paintings that often explore themes of nature, emotion, and the human experience. "
                },
                {
                    title: "Guissepe Mandi",
                    img: "https://images.unsplash.com/photo-1601860354536-8e0dd988651b?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "A celebrated chef renowned for innovative culinary creations that merge traditional techniques with avant-garde flavors."
                },
                {
                    title: "Ufuk Aslam",
                    img: "https://www.planetware.com/wpimages/2019/07/usa-best-places-to-visit-california-yosemite-falls.jpg",
                    description: "An  accomplished  musician recognized  for pushing  the boundaries  of classical  music."
                },
                {
                    title: "Hagia Sophia",
                    img: "https://img.freepik.com/free-photo/capitol-hill-building-morning-washington-dc_649448-4930.jpg?w=360&t=st=1699724160~exp=1699724760~hmac=6a139492e3fa98b5506f08934811465a32b24edef722eab96473cf4c9b503f0b",
                    description: "An architectural marvel in Istanbul, Turkey, initially a Byzantine cathedral, later transformed into an Ottoman mosque and now a museum."
                }

            ]

        }



    ]
    const countryInfo = info.find(x => x.countryName === id)

    return (
        <div>
    <ToastContainer />



            <div >
                <div className="hero" style={{
                    backgroundImage: `url(${countryInfo.poster})`,
                    width: "100%",
                    height: "350px", // Adjust this height as needed
                }}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-white text-5xl font-bold">{countryInfo.countryName}</h1>
                            <p className="mb-5 text-gray">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex mt-8 mb-8 ' style={{ height: "410px" }}>
                {
                    countryInfo.card.map(y => <div className="card card-compact w-96 m-3 bg-base-100 shadow-xl">
                        <figure><img src={y.img} alt="Shoes" className=' rounded' style={{ height: "250px", width: "350px" }} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{y.title}</h2>
                            <p>{y.description}</p>
                            <div className="card-actions justify-end">
                                {user ? (
                                    <label htmlFor="my_modal_6" onClick={()=>setHidden(false)} className="btn">Booking</label>
                                ) : (
                                    <label htmlFor="my_modal_6" className="btn" onClick={() => navigate('/login', { state: { from: location }, replace: true })}>Booking</label>
                                )}

                            </div>
                        </div>
                    </div>)
                }
            </div>





            <div className={hidden && `hidden`}>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box">


                        <div>
                            <form onSubmit={handleRegister} method="post" className={hidden ? `flex items-center justify-center hidden ` : `flex items-center justify-center`}>
                                <ToastContainer />
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




                                    <input htmlFor="my_modal_6"
                                        onClick={() => setHidden(true)}
                                        type="submit"
                                        value="Submit"
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                                    />

                                </div>

                            </form>
                        </div>


                        <div className="modal-action">
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




            <div className='text-2xl m-8 flex mr-3'>
                <div>
                    <h1 className='font-bold ' >
                        About {
                            countryInfo.countryName
                        }
                    </h1><br />
                    <div style={{ width: "700px", fontFamily: "Times New Roman", textAlign: "center" }}>
                        {
                            countryInfo.information
                        }
                    </div>
                </div>


                <img className='border rounded-md ml-3' style={{ width: "670px", height: "600px" }} src={countryInfo.verticalImg} alt="" />
            </div>

        </div>
    );
};

export default Destination;