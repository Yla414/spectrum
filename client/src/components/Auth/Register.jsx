import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register, login } from '../../redux/auth/authSlice';

const Register = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const handleRegister = () => {
        dispatch(register(formData))
    }
    
  return (
    <div>
      
    </div>
  )
}

export default Register
