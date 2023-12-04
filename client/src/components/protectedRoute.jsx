import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Route } from 'react-router-dom';

const ProtectedRoute = (allowedRoles) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    if(!user || !allowedRoles.includes(user.role)) {

    }
    return (
        
    )
}

export default ProtectedRoute;