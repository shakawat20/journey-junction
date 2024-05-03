import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../App';
import CheckoutForm from '../../payment/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import './CheckoutForm.css';

const MyDestination = () => {
  const destination = useContext(MyContext);
  const stripePromise = loadStripe("pk_test_51ND8OoBH3R7X5Kq3nuY3sbq3MnyL7O4ZppvMpZoCANMGXYzyMjVDoJfoVZDSvFuk5L3E5OPi5L46x21vuzwDsxV0005AAEeWGa"); // Replace with your actual Stripe public key

  const [price, setPrice] = useState(null);
  const [success, setSuccess] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [state, setState] = useState(true);
  const [transaction, setTransaction] = useState('');
  const [save, setSave] = useState(true);

  const user = JSON.parse(localStorage.getItem('user'));
  const places = [];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);
  
  useEffect(() => {
    if (price) {
      fetchPaymentIntent();
    }
  }, [price]);

  useEffect(() => {
    setSave(true);
  }, [save]);

  const fetchPaymentIntent = () => {
    fetch("https://journey-junction-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data?.clientSecret));
  };

  const removePlace = (placeId) => {
    const updatedUser = user.filter(item => item?.uniqueId !== placeId);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setSave(false);
  };

  const handleModalClose = () => {
    setState(false);
    setSuccess('');
    setPrice('');
  };


  const x = JSON.parse(localStorage.getItem('user'))

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < destination.length; j++) {
      if (x[i] == null) {
        continue
      }
      if (x[i].id == destination[j]._id) {

        places.push(
          {
            destination: destination[j].card[x[i].place.cardId],
            id: x[i].place.cardId,
            destinationId: destination[j]._id,
            uniqueId: x[i].uniqueId
          }
        )


      }

    }
  }


  return (
    <div style={{ height: "100%",width:"100%"}}>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      
        {places.map((place) => (
          <div>
          <div className="card card-compact w-100 bg-base-100 shadow-xl m-3" key={place.uniqueId}>
            <button style={{ color: "white", width: "30px", position: "relative", left: "92%", top: "28px" }} className='' onClick={() => removePlace(place.uniqueId)}>X</button>
            <figure className="h-60 w-92">
              <img src={place.destination.img} alt={place.title} className="h-full w-full object-cover" />
            </figure>
            <div className="card-body">
              <p>{place.destination.title}</p>
              <p>{place.destination.price} $</p>
              <div className="card-actions justify-end">
                <label htmlFor="my_modal_6" className="btn" onClick={() => setPrice(place.destination.price)}>Buy now</label>
              </div>
            </div>
          </div>
          </div>
        ))}
        <div style={{ zIndex: 2007 }}>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              {clientSecret && (
                <Elements stripe={stripePromise}>
                  <CheckoutForm price={price} clientSecret={clientSecret} setState={setState} transaction={transaction} setTransaction={setTransaction} success={success} setSuccess={setSuccess} />
                </Elements>
              )}
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn" onClick={handleModalClose}>Close!</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDestination;
