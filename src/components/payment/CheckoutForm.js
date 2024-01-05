import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
    CardElement
} from "@stripe/react-stripe-js";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";


const CheckoutForm = ({ clientSecret, price, transaction, setTransaction, success, setSuccess }) => {

    // const [transaction, setTransaction] = useState('')
    // const [success, setSuccess] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [user] = useAuthState(auth)
    const currentDate = new Date();




    // const clientSecret = new URLSearchParams(window.location.search).get(
    //     "payment_intent_client_secret"
    // );



    const [cardError, setCardError] = useState('')
    const [errorMessage, setErrorMessage] = useState(null);


    const handleSubmit = async (event) => {

        event.preventDefault()
        if (!elements || !stripe) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        if (!clientSecret) {
            return (

                <div>
                    Loading
                </div>

            )
        }
        const { paymentIntent, Error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,

                    },
                },
            },
        );

        if (paymentIntent?.status === "succeeded" && clientSecret) {
            setSuccess("congrats")
            setTransaction(paymentIntent?.id)


            fetch('https://journey-junction-server.vercel.app/paymentConfirm', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    price: price,
                    email: user?.email,
                    transaction: paymentIntent?.id,
                    date: currentDate.toISOString()

                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })


        }

    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{
                    height: "50px",
                    width: "400px"
                }}>

                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146'
                                },
                            },
                        }} />
                </div>


                {
                  success?   <button type="submit" className="btn" disabled={success}>
                        Paid
                    </button>:<button type="submit" className="btn" disabled={!stripe || !elements}>
                        Pay
                    </button>
                }
                {errorMessage && <div>{cardError}</div>}
            </form>
            {
                success &&
                <p className='text-black-500'>{success}</p>

            }
            {
                success && <p className='text-black-500'>Transaction Id{transaction}</p>
            }
        </>
    );

}

export default CheckoutForm

