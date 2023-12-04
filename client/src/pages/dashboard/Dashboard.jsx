import React from 'react';
import { useSelector } from 'react-redux';
import useProtectedRoute from '../../hooks/ProtectedRoute'

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const redirect = useProtectedRoute(['Seller', 'Creator']);

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