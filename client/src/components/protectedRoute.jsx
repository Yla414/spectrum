import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Route } from 'react-router-dom';

const ProtectedRoute = (, ...rest }) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    return (
        
    )
}

export default ProtectedRoute;