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

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      
    </div>
  )
}

export default Register
