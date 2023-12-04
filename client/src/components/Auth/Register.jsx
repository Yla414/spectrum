import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'Guest'
    });

    const handleChange = (e) => {
        setFormData({ ...formD })
    }
  return (
    <div>
      
    </div>
  )
}

export default Register
