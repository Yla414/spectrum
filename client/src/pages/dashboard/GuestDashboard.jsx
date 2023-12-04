import React from 'react';
import { useSelector } from 'react-redux';
import Logout from '../../components/Logout';

const Dashboard = () => {
    return (
        <div>
            <h2>Welcome to the guest dashboard!</h2>
            <Logout />
        </div>
    )
}

export default Dashboard;