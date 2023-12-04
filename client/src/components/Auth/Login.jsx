import React, { useState } from 'react'
import axios from '../../api/axios';
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../../redux/auth/authSlice'

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', {
                username, password
            });

            // Save user and the token generated to redux state
              console.log('Login response:', response)
              dispatch(setUser(response.data.user));
              dispatch(setToken(response.data.token));
              navigate('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error.response.data);
        }
    }
    
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleLogin}>
        {/* <label>
            Username:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label> */}
        <label>
            Username:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
