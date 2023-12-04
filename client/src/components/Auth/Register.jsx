import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register, login } from '../../redux/auth/authSlice';

const Register = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const handleRegister = () => {
        dispatch(register(formData))
    }

    const handleLogin = () => {
        dispatch(login(formData));
    }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>
            Username:
            <input type="text" value={formData.username || ''} onChange={(e) => setFormData({...formData, username: e.target.value})} />
        </label>
        
        <label>
            Email:
            <input type="email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </label>
        <label>
            Password:
            <input type="password" value={formData.password || ''} onChange={(e) => setFormData({...formData, password: e.target.value})} />
        </label>
        <button type="submit">Re</button>
      </form>
    </div>
  )
}

export default Register
