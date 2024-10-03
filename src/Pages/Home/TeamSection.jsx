
import image1 from '../../assets/images/team/1.jpg'
import image2 from '../../assets/images/team/2.jpg'
import image3 from '../../assets/images/team/3.jpg'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
const TeamSection = () => {
    return (
        <div className='my-7'>
            <div className='text-center my-5 space-y-5'>
                <h3 className='text-red-600 text-md'>Team</h3>
                <h3 className="text-3xl font-bold">Meet Our Team</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable. </p>
            </div>
            {/* slider */}
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-3">

                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image1} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image2} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image3} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="item2" className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-3">
                <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image3} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image2} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image1} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-3">
                <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image2} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image1} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image3} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-3">
                <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image3} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image2} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl '>
                        <img className='rounded w-64  mx-auto' src={image1} alt="" />
                        <div className='text-center space-y-6'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <div className='flex gap-5 justify-center'>
                                <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
                                <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
                                <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
                                <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default TeamSection;

{/* <div className='shadow-xl '>
<img className='rounded w-64  mx-auto' src={image1} alt="" />
<div className='text-center space-y-6'>
    <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
    <p>Engine Expert</p>
    <div className='flex gap-5 justify-center'>
    <button className='text-sky-900 text-xl'> <FaFacebook></FaFacebook></button>
    <button className='text-sky-500 text-xl'> <FaLinkedinIn></FaLinkedinIn></button>
    <button className='text-blue-600 text-xl'><FaTwitter></FaTwitter></button>
    <button className='text-red-400 text-xl'> <FaInstagram></FaInstagram></button>
    </div>
</div>
</div> */}