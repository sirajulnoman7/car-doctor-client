import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvides/AuthProviders';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import axios from 'axios';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    console.log(booking)
    console.log(user)
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setBooking(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBooking(data)
        //     })
    }, [])


    const handleDelete = (id) => {
        // Show confirmation dialog
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Only proceed with deletion if confirmed
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Show success alert after deletion is complete
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                    const remainingBooking=booking.filter(book=>book._id !==id)
                    setBooking(remainingBooking)
                })
                
            }
        });
    };

    const updateBooking=(id)=>{
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({status:'Confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('Booking Updated')
            if(data.modifiedCount>0){
                Swal.fire({
                    title: "Updated",
                    text: "Successfully Updated",
                    icon: "success"
                  });
                  const remainingBooking=booking.filter(books=>books._id !==id)
                  const updateBooking=booking.find(books=>books._id ===id)
                  updateBooking.status='Confirm'
                  const newBookings=[updateBooking, ...remainingBooking]
                  setBooking(newBookings)
            }
        })
    }
    return (
        <div>
            <h3>booking : {booking.length}</h3>


            <div className="overflow-x-auto">
                <table className="table">
             
                    <tbody>
                 
                 {
                     booking.map(books=><BookingRow key={books._id} books={books}
                        handleDelete={handleDelete}
                        updateBooking={updateBooking}
                     ></BookingRow>)
                 }
                       
                    </tbody>
                 
                   
                </table>
            </div>
        </div>
    );
};

export default Booking;