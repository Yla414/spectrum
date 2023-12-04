import axios from '../api/axios';
import { setUser } from '../redux/auth/authSlice';

const fetchUserDetails = async (dispatch) => {
    try {
        const response = await axios.get('/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        });

        const { user } = response.data;

        dispatch(setUser(user));
    } catch (error) {
        console.error('Error fetching user details:', error)
    }
}

export default fet