import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { Ri }

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/login');
    }
  return (
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
