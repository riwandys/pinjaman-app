export const LOGIN = 'LOGIN';
import API from '../../constants/api';

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
                    console.log(`${responseJSON.data.email} login pada ${new Date().toString()}`);
                    dispatch({
                        type: LOGIN,
                        data: responseJSON.data
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}