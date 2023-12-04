import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setToken } from '../../redux/auth/authSlice'

const Register = () => {
  const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      if(user) {
        navigate('/dashboard');
      }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', {
                username, password
            });

            // Save user and the token generated to redux state
              console.log('Login response:', response);

              const { user, token } = response.data;

              dispatch(setUser(user));
              dispatch(setToken(token));

              localStorage.setItem

              navigate('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error.response.data);
        }
    }
    
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        {/* <label>
            Username:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label> */}
        <label>
            Username:
            <input type="text" name="username" autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" name="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="submit">Login</button>
        <Link to={'/register'}>Register</Link>
        
      </form>
    </div>
  )
}

export default Register
