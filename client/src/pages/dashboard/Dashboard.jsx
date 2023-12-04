import React from 'react';
import { useSelector } from 'react-redux';
import useProtectedRoute from '../../hooks/ProtectedRoute'

const Dashboard = () => {
    const redirect = useProtectedRoute(['Seller', 'Creator']);
    const user = useSelector((state) => state.auth.user);
    
    if(redirect) {
        return redirect;
    }

    
    return (
        <div>
            <h2>Welcome to the dashboard, {user.username}!</h2>
            <p>Your role: {user.role}</p>
        </div>
    )
}

export default Dashboard;