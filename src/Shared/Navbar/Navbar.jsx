import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg'
import { AuthContext } from '../../Providers/AuthProvides/AuthProviders';
const Navbar = () => {
    const {logOut,user}=useContext(AuthContext)
    const handleSignOut=()=>{
        logOut()
        .then(result=>{
            console.log("sign out")
        })
        .then(error=>console.error(error))
    }
    const link = <>
        <li className='font-semibold '><NavLink to={'/'}>Home</NavLink></li>
        <li className='font-semibold '><NavLink to={'/about'}>About</NavLink></li>
        <li className='font-semibold '><NavLink to={'/service'}>Service</NavLink></li>
        <li className='font-semibold '><NavLink to={'/blog'}>Blog</NavLink></li>
        <li className='font-semibold '><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar h-[86px] mb-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
       
            <div className="navbar-end">
            <button className="btn btn-ghost btn-circle mr-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
                <button className='btn btn-outline btn-warning'>Appointment</button>
              {
                user &&   <button onClick={handleSignOut} className='btn btn-info ml-3'>Sign Out</button>
              }
            </div>
        </div>
    );
};

export default Navbar;