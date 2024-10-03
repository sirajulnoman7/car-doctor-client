import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import {  FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';

const ServiceTime = () => {
    return (
        <div className='my-7 bg-black p-12 md:flex lg:flex justify-between rounded-lg '>
            <div className='flex items-center gap-5'>
              <FaCalendarAlt className='text-3xl text-red-500 '></FaCalendarAlt>
                <div className='text-white'>
                      <h3>We are open monday-friday</h3>
                      <h4 className="text-3xl font-bold">7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex items-center gap-5'>
            <FaPhoneVolume className='text-3xl text-green-500 ' />
                <div className='text-white'>
                      <h3>Have a question?</h3>
                      <h4 className="text-3xl font-bold">+2546 251 2658</h4>
                </div>
            </div>
            <div className='flex items-center gap-5'>
            <FaLocationDot className="text-3xl text-red-500"/>

                <div className='text-white'>
                      <h3>Need a repair? our address</h3>
                      <h4 className="text-3xl font-bold">Liza Street, New York</h4>
                </div>
            </div>
        </div>
    );
};

export default ServiceTime;