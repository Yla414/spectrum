import React from 'react';
import { useSelector } from 'react-redux';
import useProtectedRoute from '../../hooks/useProtectedRoute'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const redirect = useProtectedRoute(['Seller', 'Creator']);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    
    if(redirect) {
        return redirect;
    }

    if(!user) {
        navigate('/login')
    }

    const { username = 'Guest', role = 'Guest' } = user
    
    return (
        <div>
            <h2>Welcome to the dashboard, {user.email}!</h2>
            <p>Your role: {role}</p>
        </div>
    )
}

export default Dashboard;