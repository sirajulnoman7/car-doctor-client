import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../assets/images/checkout/checkout.png'
import Swal from 'sweetalert2';
const Checkout = () => {
    const service = useLoaderData()
  const img=service.img
  const title=service.title
    const handleSubmit = e => {
        e.preventDefault()
          const email=e.target.email.value;
          const name=e.target.name.value;
          const price=e.target.price.value;
          const date=e.target.date.value;
          const area=e.target.area.value;
          console.log(name,email,price,date,area)
        const dataInfo={name,email,price,date,area,img,title}
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(dataInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "The Booking ",
                    text: "Your Booking is success",
                    icon: "success"
                  });
                  
            }
            console.log(data)
        })
    }
    return (
        <div>
            <div>
                <img className='mx-auto' src={img} alt="" />
            </div>


            <div className='w-[1000px] mx-auto space-y-5 border-3 p-10 bg-slate-100 shadow-lg m-12 rounded'>

                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleSubmit} className='px-5  py-2'>

                        <div className='flex justify-between gap-2 '>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-mono font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-mono font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>



                        <div className='flex justify-between gap-2 '>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-mono font-semibold">Price</span>
                                </label>
                                <input type="text" defaultValue={service.price} name='price' className="input input-bordered" required />

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-mono font-semibold">Date</span>
                                </label>
                                <input type="date" name='date' placeholder="date" className="input input-bordered" required />
                            </div>
                        </div>
                        <textarea name='area'
                            placeholder="Describe your service "
                            className="textarea textarea-bordered textarea-lg w-full h-40 my-3"></textarea>
                        <button className='btb btn-info w-full bg-orange-600 text-white py-3 mt-2  rounded-lg '>Order Confirm</button>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Checkout;

