import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import Loading from '../loading/Loading';
import UseAdmin from '../../hooks/UseAdmin';

const PaymentInfo = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    const [payment, setPayment] = useState([])
    const [removeDestination, setRemoveDestination] = useState()



    // if (admin === false) {
    //     const filteredPayments = payment.filter(p => p?.email === user?.email);
    //     console.log("hope is everything")
    //     setPayment(filteredPayments);
    // }






    useEffect(() => {

        fetch(`https://journey-junction-server.vercel.app/userInfo`,
            {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('journeyToken')}`
                }
            }

        )
            .then(res => res.json())
            .then(data => {
console.log("problem",data)

                if (admin === false) {
                    const filteredPayments = data?.filter(p => p?.email == user?.email);
                    console.log("hope is everything")
                    setPayment(filteredPayments);
                }
                else{
                    setPayment(data)
                }


            })

        // else if (admin==false) {

        //     fetch(`https://journey-junction-server.vercel.app/paymentInfo/${user?.email}`,
        //         {
        //             method: 'GET',
        //             headers: {
        //                 authorization: `Bearer ${localStorage.getItem('journeyToken')}`
        //             }
        //         }

        //     )
        //         .then(res => res.json())
        //         .then(data => {
        //             setPayment(data)
        //             console.log("paymentInfo", data)
        //         })
        // }

    }, [admin, removeDestination])






    const remove = (transactionId) => {
        fetch(`https://journey-junction-server.vercel.app/paymentInfo/${transactionId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log("remove", data)
                setRemoveDestination(data)
            })

    }

    if (payment.message) {

        return (<div>Session expire</div>)

    }

    return (
        <div style={{ width: "100%" }}>

            <div className="overflow-x-auto" style={{ height: "800px", width: "100%" }}>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
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
                                    <td className='btn m-2' onClick={() => remove(PaymentInfo?.transaction)}>Remove</td>
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