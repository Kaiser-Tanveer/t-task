import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Pages/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    // getting user from context 
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    if (loading) {
        return <Spinner />
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;