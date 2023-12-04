import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/loi')
    }
  return (
    <div>
      
    </div>
  )
}

export default Logout
