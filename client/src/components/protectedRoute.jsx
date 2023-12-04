import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    return (
        <Route 
            {...rest}
            render={(props) => {
                if(user && allowedRoles.includes(user.role)) {
                    return <Component {...props} />
                } else {
                    return navigate()
                }
            }}
        ></Route>
    )
}

export default ProtectedRoute;