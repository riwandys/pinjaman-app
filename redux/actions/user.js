export const GET_LIMIT = 'GET_LIMIT';
import API from '../../constants/api';

export const getUserLimit = (nik) => {
    return (dispatch) => {
        fetch(`${API.BASE_URL}/user/${nik}/limit`)
            .then(response => {
                return response.json()
            })
            .then(responseJSON => {
                dispatch({
                    type: GET_LIMIT,
                    data: responseJSON.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
}