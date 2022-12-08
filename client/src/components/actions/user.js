import axios from 'axios';
import { setUser } from '../../reducer/userReducer';

export const registration = async (email, password) => {
    
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
        email,
        password
    })
        alert(response.data.message)
    } catch (error) {
        alert(error)
    }
}

export const login = async (email, password) => {

    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
            email,
            password
        })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.user)
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}