import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/auth/authSlice'

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('to')
    }
  return (
    <div>
      
    </div>
  )
}

export default Logout
