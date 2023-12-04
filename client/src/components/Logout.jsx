import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/auth/authSlice'

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        loc
    }
  return (
    <div>
      
    </div>
  )
}

export default Logout
