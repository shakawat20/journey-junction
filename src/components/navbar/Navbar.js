import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    if (user) {
        console.log(user.photoURL)
    }

    const navbar = <>
        <li className='mr-4 rounded-sm'>
            <Link to='/'>Home</Link>

        </li>
        <li tabIndex={0} style={{ zIndex: 3 }}>
            <details >
                <summary>Destination</summary>
                <ul className="p-2">

                    <li className="dropdown dropdown-right">
                        <li tabIndex={0} className=" m-1">Asia</li>
                        <ul tabIndex={0} className="dropdown-content z-[1]  p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/destination/Turkiye'>Turkiye</Link></li>
                            <li><Link to='/destination/Thailand'>Thailand</Link></li>
                        </ul>
                    </li>

                    <br />

                    <li className="dropdown dropdown-right">
                        <li tabIndex={0} className=" m-1">Europe</li>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/destination/UK'>UK</Link></li>

                        </ul>
                    </li>
                    <br />

                    <li className="dropdown dropdown-right">
                        <li tabIndex={0} className=" m-1">America</li>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2  bg-base-100 rounded-box w-52">
                            <li><Link to='/destination/USA'>USA</Link></li>

                        </ul>
                    </li>


                </ul>
            </details>
        </li>



        <li className='mr-4'>
            <Link to='/about'>About</Link>
        </li>

    </>





    return (
        <div className="navbar bg-base-100  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navbar
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Journey junction</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navbar
                    }
                </ul>
            </div>







            <div className="navbar-end flex align-center">
                {
                    user && <div className="avatar mr-4">
                        <div className="w-9 rounded-full" >
                            <img src={user.photoURL} />
                        </div>
                    </div>
                }


                {
                    user ? <button onClick={() => signOut(auth)}>Log out</button> : <Link className="btn" to="/login">Log in</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;