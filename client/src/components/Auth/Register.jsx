import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Guest');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username, email, password, role
            });

            // Save user and the token generated to redux state
            dispatch(setUser(response.data.user));
            dispatch(setToken(response.data.token));
            console.log(response.data);
        } catch (error) {
            console.error('Error registering user:', error.response.data.message);
        }
    }
    
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label>
            Username:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Email:
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.targe)} />
        </label>
        <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={} />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
