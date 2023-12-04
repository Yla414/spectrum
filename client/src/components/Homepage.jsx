import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to={'/login'}>Lo</Link> 
    </div>
  )
}

export default Homepage;
