import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Signin from '../Pages/Signin/Signin';
import SignUp from '../Pages/SignUp/SignUp';

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