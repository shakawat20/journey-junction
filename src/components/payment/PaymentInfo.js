import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const PaymentInfo = () => {
    const [user] = useAuthState(auth)
    const [payment, setPayment] = useState([])

    useEffect(() => {

        if (user?.email) {

            fetch(`https://journey-junction-server.vercel.app/paymentInfo/${user?.email}`,
            {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('journeyToken')}`
                }
            }
            
            )
                .then(res => res.json())
                .then(data => {
                    setPayment(data)
                    console.log(data)
                })
        }

    }, [user])

    console.log(payment)
    return (
        <div>

            <div className="overflow-x-auto" style={{ height: "800px", width: "1200px" }}>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Date</th>
                            <th>Transaction Id</th>
                            <th>Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((PaymentInfo, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{PaymentInfo?.date}</td>
                                    <td>{PaymentInfo?.email}</td>
                                    <td>{PaymentInfo?.transaction}</td>
                                    <td>{PaymentInfo?.price}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>



        </div >
    );
};

export default PaymentInfo;