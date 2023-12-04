import React from 'react'
import { useSelector } from 'react-redux';

const SellerDashboard = () => {
    const user = useSelector((state) => state.auth)
  return (
    <div>
      <h2>Welcome to the Seller dashboard!</h2>
    </div>
  )
}

export default SellerDashboard
