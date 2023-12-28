import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import Loading from '../loading/Loading';

const PaymentInfo = () => {
    const [user] = useAuthState(auth)
    const [payment, setPayment] = useState([])
    const [removeDestination,setRemoveDestination]=useState()


    useEffect(() => {
        if (!user?.email) {
            setPayment([])
            return(<span className="loading loading-spinner loading-lg"></span>)
        }
        else if (user?.email) {

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
                    console.log("paymentInfo",data)
                })
        }

    }, [user,removeDestination])

    const remove =(transactionId)=>{
        fetch(`https://journey-junction-server.vercel.app/paymentInfo/${transactionId}`,{
            method:"DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("remove",data)
            setRemoveDestination(data)
        })

    }
if(!payment){

    return(<Loading></Loading>)

}
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
                                    <td className='btn m-2' onClick={()=>remove(PaymentInfo?.transaction)}>Remove</td>
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