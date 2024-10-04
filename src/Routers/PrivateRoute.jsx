import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvides/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location=useLocation()
    if (loading) {
        return <>
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/sign_in'} state={location} replace></Navigate>
};

export default PrivateRoute;