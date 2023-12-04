import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Homepage, Register, Login, SellerDashboard, CreatorDashboard, GuestDashboard } from './components/components.exports';
import axios from './api/axios'
import { setToken, setUser, logout } from './redux/auth/authSlice';

const App = () => {
  const userRole = useSelector(state => state.auth.user?.role);
  const dispatch = useDispatch();

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
  
  // const navigateToLogin = () => {
  //   window.location.href = '/login'
  // }

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log('Stored tokenstoredToken);

    if(storedToken) {
      axios.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        }
      })
      .then((res) => {
        const { user } = res.data;
        dispatch(setUser(user));
        dispatch(setToken(storedToken));
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
        dispatch(logout());
      })
    }
  }, [dispatch]);

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
