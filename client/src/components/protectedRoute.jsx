import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Route } from 'react-router-dom';

const useProtectedRoute = (allowedRoles) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    if(!user || !allowedRoles.includes(user.role)) {
        return navigate('/login');
    }
    return null;
}

export default useProtectedRoute;