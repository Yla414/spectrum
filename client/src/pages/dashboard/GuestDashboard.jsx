import React from 'react';
import { useSelector } from 'react-redux';
import Logout from '../../components/Logout';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <div>
            <h2>Welcome to the guest dashboard {us}!</h2>
            <Logout />
        </div>
    )
}

export default Dashboard;