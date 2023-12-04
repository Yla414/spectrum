import axios from '../api/axios';
import { setUser } from '../redux/auth/authSlice';

const fetchUserDetails = async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        console.log(token)
        const response = await axios.get('/user/me', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        const { user } = response.data;

        dispatch(setUser(user));
    } catch (error) {
        console.error('Error fetching user details:', error)
    }
}

export default fetchUserDetails;