import API from '../../constants/api';
import { AsyncStorage } from 'react-native'
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (data) => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATE,
            data: data
        });
    }
}

export const loginAction = (email, pin) => {
    const data = new FormData();
    data.append('email', email);
    data.append('pin', pin);
    return (dispatch) => {
        fetch(`${API.BASE_URL}/user/login`, {
            method: 'POST',
            body: data
        })
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                if (responseJSON.message === 'Login failed') {
                    alert(responseJSON.data.auth_message);
                } else {
                    saveDataToStorage(responseJSON.data);
                    dispatch(authenticate(responseJSON.data));
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

const saveDataToStorage = (data) => {
    AsyncStorage.setItem(
        'userData',
        JSON.stringify(data)
    );
};