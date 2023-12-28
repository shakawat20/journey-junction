import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {




  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center relative ml-80 " style={{width:"1190px"}}>
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content fixed">
            {/* Sidebar content here */}
            <li><Link to="/dashboard">My Destination</Link></li>
            <li><Link to="/dashboard/paymentInfo">Payment Info</Link></li>
         
          </ul>

        </div>
      </div>
   
    </div>
  );
};

export default Dashboard;