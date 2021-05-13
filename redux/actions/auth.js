import API from '../../constants/api';
import { AsyncStorage } from 'react-native'
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (email, nik, role) => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATE,
            data: { email, nik, role }
        });
    }
}

export const loginAction = (email, password) => {
    return (dispatch) => {
        fetch(`${API.BASE_URL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                return response.json()
            })
            .then(responseJSON => {
                if (responseJSON.message === 'Login failed') {
                    alert(responseJSON.data.auth_message);
                } else {
                    const { email, nik, role } = responseJSON.data;
                    saveDataToStorage(email, nik, role);
                    dispatch(authenticate(email, nik, role));
                    console.log(`Login sucess in ${new Date().toString()}`);
                }
            })
            .catch(err => {
                alert('Terjadi error saat login')
                console.log(err);
            })
    }
}

export const logout = () => {
    AsyncStorage.removeItem('userData');
    console.log('Log out success');
    return { type: LOGOUT }
}

const saveDataToStorage = (email, nik, role) => {
    AsyncStorage.setItem(
        'userData',
        JSON.stringify({
            email,
            nik,
            role
        })
    );
};