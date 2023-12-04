import React from 'react'
import { useSelector } from 'react-redux';

const SellerDashboard = () => {
    const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <h2>Welcome to the Seller dashboard {user.username}!</h2>
    </div>
  )
}

export default SellerDashboard