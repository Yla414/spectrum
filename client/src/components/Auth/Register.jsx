import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'Guest'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/auth/register', formData)
        .then((res) => {
            console.log(res.data);
            if(res) {
                navigate('/');
            }
        })
    }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        l
      </form>
    </div>
  )
}

export default Register
