import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={img1}
                    className="h-[600px] w-full rounded-lg " />
                <div className="absolute flex items-center  h-full  top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)] rounded-lg">
                    <div className='w-1/2 text-white space-y-7 px-7'>
                        <h4 className='text-6xl font-bold'>Affordable Price For Car Servicing</h4>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary'>Discover More</button>
                        <button className='btn btn-outline btn-error ml-5'>Project More</button>
                    </div>

                </div>
                <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0 ">
                    <a href="#slide4" className="btn btn-circle mr-3 hover:bg-yellow-600">❮</a>
                    <a href="#slide2" className="btn btn-circle mr-3 hover:bg-yellow-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="h-[600px] w-full rounded-lg" />
                     <div className="absolute flex items-center  h-full rounded-lg  top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)]">
                    <div className='w-1/2 text-white space-y-7 px-7'>
                        <h4 className='text-6xl font-bold'>Affordable Price For Car Servicing</h4>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary'>Discover More</button>
                        <button className='btn btn-outline btn-error ml-5'>Project More</button>
                    </div>

                </div>
                <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0 px-3">
                    <a href="#slide1" className="btn btn-circle mr-3 hover:bg-yellow-600">❮</a>
                    <a href="#slide3" className="btn btn-circle mr-3 hover:bg-yellow-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="h-[600px] w-full rounded-lg" />
                     <div className="absolute flex items-center rounded-lg  h-full  top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21, 21,0)]">
                    <div className='w-1/2 text-white space-y-7 px-7'>
                        <h4 className='text-6xl font-bold'>Affordable Price For Car Servicing</h4>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary'>Discover More</button>
                        <button className='btn btn-outline btn-error ml-5'>Project More</button>
                    </div>

                </div>
                <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0 px-3">
                    <a href="#slide2" className="btn btn-circle mr-3 hover:bg-yellow-600">❮</a>
                    <a href="#slide4" className="btn btn-circle mr-3 hover:bg-yellow-600">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="h-[600px] w-full rounded-lg" />
                     <div className="absolute flex items-center  h-full  top-0 left-0 bg-gradient-to-r from-[#151515] rounded-lg to-[rgba(21,21, 21,0)]">
                    <div className='w-1/2 text-white space-y-7 px-7'>
                        <h4 className='lg:text-6xl md:text-6xl text-lg font-bold'>Affordable Price For Car Servicing</h4>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary'>Discover More</button>
                        <button className='btn btn-outline btn-error ml-5'>Project More</button>
                    </div>

                </div>
                <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0 px-3">
                    <a href="#slide3" className="btn btn-circle mr-3 hover:bg-yellow-600">❮</a>
                    <a href="#slide1" className="btn btn-circle mr-3 hover:bg-yellow-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;