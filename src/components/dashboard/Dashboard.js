import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import UseAdmin from '../../hooks/UseAdmin';

const Dashboard = () => {

  const [user] = useAuthState(auth)

  const [admin, adminLoading] = UseAdmin(user)


  return (
    <div className=" gap-4" style={{}} >
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col  justify-center pl-10 pt-10"  >
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Outlet></Outlet>




        </div>

        <div className="drawer-side" style={{ zIndex: "2000" }} >
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content  " style={{ height: "100%" }}>
            {/* Sidebar content here */}
            {!admin && <><li><Link to="/dashboard">My Destination</Link></li>
             <li><Link to="/dashboard/paymentInfo">Payment Info</Link></li></>}
         
            {
              admin && <> <li><Link to="/dashboard">Make admin</Link></li>
              <li><Link to="/dashboard/paymentInfo">Payment Info</Link></li></>
            }


          </ul>

        </div>


      </div>

    </div>
  );
};

export default Dashboard;