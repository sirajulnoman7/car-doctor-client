import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Signin from '../Pages/Signin/Signin';
import SignUp from '../Pages/SignUp/SignUp';
import Checkout from '../Pages/Checkout/Checkout';
import Booking from '../Pages/Booking/Booking';
import PrivateRoute from './PrivateRoute';

 export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
        
            },
            {
                path:'/sign_in',
                element:<Signin></Signin>
            },
            {
                path:'/sign_up',
                element:<SignUp></SignUp>

            },
            {
                path:'/services/:id',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params})=>fetch(`https://car-doctor-server-gamma-drab.vercel.app/service/${params.id}`)
            },
            {
                path:'/booking',
                element:<PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    },
   
])
const Route = () => {
    return (
     <div>

     </div>
    );
};

export default Route;