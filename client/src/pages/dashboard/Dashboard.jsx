import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <div>
            <h2>Welcome to the dashboard, {user.username}!</h2>
            <p>Your role: {user.role}</p>
        </div>
    )
}

export default Dashboard;