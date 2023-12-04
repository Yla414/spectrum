import React, { useState } from 'react'
import axios from './axios';
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../../redux/auth/authSlice'

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Guest');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email, password
            });

            // Save user and the token generated to redux state
            if(response) {
                dispatch(setUser(response.data.user));
                dispatch(setToken(response.data.token));
                navigate('/login')
            }
            console.log(response.data);
        } catch (error) {
            console.error('Error registering user:', error.response.data.message);
        }
    }
    
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        {/* <label>
            Username:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label> */}
        <label>
            Email:
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="submit">Login</button>
        <Link to={'/register'}>Register</Link>
        
      </form>
    </div>
  )
}

export default Register
