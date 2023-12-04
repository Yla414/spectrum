import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../../components/Logout';
import fetchUserDetails from '../../utils/fetchUserDetails';

const CreatorDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if(user) {
      fetch
    }
  }, [])

  return (
    <div>
      <h2>Welcome to the Creator dashboard {user && user.username}!</h2>
      <Logout />
    </div>
  )
}

export default CreatorDashboard
