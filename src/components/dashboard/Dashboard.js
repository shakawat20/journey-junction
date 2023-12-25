import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const destination = useContext(MyContext)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
}, []);
  const x = JSON.parse(localStorage.getItem('user'))
  console.log(x)
  console.log(destination)
  const var1 = []


  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < destination.length; j++) {
      if (x[i] == null) {
        continue
      }
      if (x[i].id == destination[j]._id) {
        var1.push(destination[j].card[x[i].place.cardId])

      }

    }
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center" style={{width:"1190px"}}>
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to="/dashboard">My Destination</Link></li>
            <li><Link to="/dashboard/paymentInfo">Payment Info</Link></li>
         
          </ul>

        </div>
      </div>
      {/* {
          var1.map(y =>
            <div key={y.id} className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={y.img} alt="Shoes" className='rounded' style={{ height: "250px", width: "350px" }} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{y.title}</h2>
                <p>{y.description}</p>
                <p>{y.price} $</p>
                <button className='btn'>Pay</button>
              </div>
            </div>
          )
        } */}
    </div>
  );
};

export default Dashboard;