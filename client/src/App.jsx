import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Homepage from './components/Homepage'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';

const App = ({ component: Component, allowedRoles, ...rest }) => {
  // const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          {/* <Route 
            path='/dashboard'
            {...rest}
            render={(props) => {
                if(user && allowedRoles.includes(user.role)) {
                    return <Component {...props} />
                } else {
                    return window.location.href = '/login';
                }
            }}
        ></Route> */}
        <ProtectedRoute path='/dashboard' component={<Dashboard />} allowedRoles={['Seller', 'Creator']} ></ProtectedRoute>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
