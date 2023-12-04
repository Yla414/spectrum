import React from 'react';
import { useSelector } from 'react-redux';
import useProtectedRoute from '../../hooks/useProtectedRoute'
import {  }

const Dashboard = () => {
    const redirect = useProtectedRoute(['Seller', 'Creator']);
    const user = useSelector((state) => state.auth.user);
    
    if(redirect) {
        return redirect;
    }

    if(!user) {
        navigate('/login')
    }

    
    return (
        <div>
            <h2>Welcome to the dashboard, {user.email}!</h2>
            <p>Your role: {user.role}</p>
        </div>
    )
}

export default Dashboard;