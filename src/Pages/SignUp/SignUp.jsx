import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvides/AuthProviders';
const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        console.log(email,password,name)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            alert('Sign Up successfully ')

            console.log(user)
            form.reset()
        })
        .then(error=>{
            console.log(error.massage)
        })
    }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                  
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                       <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <h4 className='text-center'>Or sign in with</h4>
                    <div className='flex gap-6 justify-center my-6'>
                        <button><FaFacebook className='text-sky-500'></FaFacebook></button>
                       <button> <FaLinkedin className='text-sky-700'></FaLinkedin></button>
                      <button>  <FcGoogle /></button>

                    </div>
                    <h2 className='text-center p-4'>Already have an account please <Link to={'/sign_in'} className='text-orange-600 mr-2 font-bold'>Sign In</Link></h2>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;