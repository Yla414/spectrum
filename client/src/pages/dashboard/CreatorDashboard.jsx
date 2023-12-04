import React from 'react'
import { useSelector } from 'react-redux';
import Logout from '../../components/Logout';


const CreatorDashboard = () => {
  return (
    <div>
      <h2>Welcome to the Creator dashboard!</h2>
      <Logout />
    </div>
  )
}

export default CreatorDashboard
