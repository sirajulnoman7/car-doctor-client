import React from 'react';
import img from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content  flex-col lg:flex-row">
                <div className='w-1/2 relative '>
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl " />
                    <img
                        src={img2}
                        className="max-w-sm rounded-lg shadow-2xl absolute right-10 border-8 border-white top-1/2" />
                </div>
                <div className='w-1/2 space-y-5'>
                <h3 className='text-red-500 font-bold text-md'>About</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of <br /> experience in this field</h1>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-error">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;