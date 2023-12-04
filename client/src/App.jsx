import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = ({ component: Component, al }) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route 
            {...rest}
            render={(props) => {
                if(user && allowedRoles.includes(user.role)) {
                    return <Component {...props} />
                } else {
                    return navigate('/login');
                }
            }}
        ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
