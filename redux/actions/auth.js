export const LOGIN = 'LOGIN';
import API from '../../constants/api';

export const loginAction = (email, password) => {
    return (dispatch) => {
        fetch(`${API.BASE_URL}/user/login`, {
            method: 'POST'
        })
            .then(response => {
                return response.json()
            })
            .then(response => {
                dispatch({
                    type: LOGIN,
                    data: response.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
}