import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Route } from 'react-router-dom';

const ProtectedRoute = (allowedRoles) => {
    const user = useSelector((state) => state.auth.user);
    if(!user || !allowedRoles.includes(user.role)) {
        
    }
    const navigate = useNavigate();
    return (
        
    )
}

export default ProtectedRoute;