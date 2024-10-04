import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div className='my-7'>
            <div className='text-center mt-10'>
                <h3 className='text-red-500 font-bold '>Service</h3>
                <h3 className='text-5xl font-bold'>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-7'>
           {
                services.map(service => <div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img className='h-[208px] hover:scale-125 duration-1000 w-full'
                                src={service.img}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <div className="card-actions justify-end items-center">
                                <p className='text-red-500 font-bold '>Price : ${service.price}</p>
                               <Link to={`/services/${service._id}`}>
                               <button className="btn btn-circle hover:bg-yellow-700 hover:text-white text-red-500 ">
                                <FaArrowRightLong className='text-xl'/>

                                </button>
                               </Link>
                            </div>
                        </div>
                    </div>

                </div>)
            }
           </div>
        </div>
    );
};

export default Services;