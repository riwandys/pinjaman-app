import { Alert } from 'react-native';
import API from '../../constants/api';
export const GET_LIMIT = 'GET_LIMIT';
export const LOAN = 'LOAN';

export const getUserLimit = (nik, token) => {
    return (dispatch) => {
        fetch(`${API.BASE_URL}/user/${nik}/limit`, {
            method: 'GET',
            headers: {
                Authorization: `Basic ${token}`
            }
        })
            .then(response => {
                return response.json()
            })
            .then(responseJSON => {
                if (responseJSON.data.limit === undefined) {
                    dispatch({
                        type: GET_LIMIT,
                        data: responseJSON.data
                    });
                }
            })
            .catch(err => {
                console.log(err);
                Alert.alert('Terjadi error')
            })
    }
}

export const loanMoney = (nik, data) => {
    return dispatch => {
        fetch(`${API.BASE_URL}/user/${nik}/transaction`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                if (responseJSON.message === 'Loan success') {
                    alert('Peminjaman berhasil');
                    dispatch({
                        type: LOAN,
                        limit_remaining: responseJSON.data.limit_remaining
                    });
                } else {
                    alert('Maaf peminjaman gagal dilakukan. Coba beberapa saat lagi.');
                }
            })
            .catch(err => {
                alert('Terjadi error saat melakukan peminjaman. Coba beberapa saat lagi')
            });
    }
}