import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <div>
            <h2></h2>
        </div>
    )
}

export default Dashboard;