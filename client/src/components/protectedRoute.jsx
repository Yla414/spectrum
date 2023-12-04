import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Route {}></Route>
    )
}

export default ProtectedRoute;