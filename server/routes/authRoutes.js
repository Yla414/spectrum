const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const dotenv = require('dotenv')

dotenv.config();

// REGISTRATION ROUTE
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, role } = req.body

    // Check for existing user
    const existingUser = await User.findOne({ username, email })
    if (existingUser) {
      const response = res
        .status(400)
        .json({ message: 'user with this e already exists...!' })
      console.log(response)
      return response
    }

    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role
    })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully!' })
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// LOGIN ROUTE
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    // fIND USER BY EMAIL
    const user = await User.findOne({ username })
    if (!user) {
      const response = res
        .status(401)
        .json({ message: 'Invalid username or password' })
      console.log(response)
      return response
    }

    // Compare input password
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      const response = res.status(401).json({ message: 'Incorrect password' })
      console.log(response)
      return response
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1d' }
    )

    res.status(200).json({ message: 'Login successful', user, token })
  } catch (error) {
    console.error('Error logging in:', error.message)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

module.exports = router
