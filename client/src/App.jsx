import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Homepage from './components/Homepage'
// import Register from './components/auth/Register'
// import Login from './components/auth/Login'
// import GuestDashboard from './pages/dashboard/GuestDashboard'
// import SellerDashboard from './pages/dashboard/SellerDashboard'
// import CreatorDashboard from './pages/dashboard/CreatorDashboard'
import {}

const App = () => {
  const userRole = useSelector(state => state.auth.user?.role)
  const GetDashboardComponent = () => {
    switch (userRole) {
      case 'Seller':
        return <SellerDashboard />
      case 'Creator':
        return <CreatorDashboard />
      default:
        return <GuestDashboard />
    }
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<GetDashboardComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
