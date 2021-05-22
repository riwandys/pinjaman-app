import { Alert } from 'react-native';
import API from '../../constants/api';
const GET_LIMIT = 'GET_LIMIT';
const LOAN = 'LOAN';
const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
const GET_HISTORY = 'GET_HISTORY';

const PAY = 'PAY';

const getUserLimit = (nik, token) => {
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
                if (responseJSON.data.limit) {
                    const { limit, limit_remaining } = responseJSON.data;
                    dispatch({
                        type: GET_LIMIT,
                        data: {
                            limit: parseInt(limit),
                            limit_remaining: parseInt(limit_remaining)
                        }
                    });
                }
            })
            .catch(err => {
                console.log(err);
                Alert.alert('Terjadi error')
            })
    }
}

const loanMoney = (nik, data, token) => {
    return dispatch => {
        fetch(`${API.BASE_URL}/user/${nik}/transaction`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'application/json'
            },
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
                console.log(err);
                // alert('Terjadi error saat melakukan peminjaman. Coba beberapa saat lagi')
            });
    }
}

const getTransactionsList = (nik, token) => {
    return dispatch => {
        fetch(`${API.BASE_URL}/user/${nik}/transactions`, {
            method: 'GET',
            headers: {
                Authorization: `Basic ${token}`
            }
        })
            .then(response => response.json())
            .then(responseJSON => {
                dispatch({
                    type: GET_TRANSACTIONS,
                    data: responseJSON
                })
            })
            .catch(err => console.log(err));
    }
}

const payBill = (transactionID, token, paymentProof) => {
    const formData = new FormData();
    formData.append('payment_proof', paymentProof);
    fetch(`${API.BASE_URL}/transaction/${transactionID}/payment-proof`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${token}`
        },
        body: formData
    })
        .then(response => response.json())
        .then(responseJSON => {
            if (responseJSON.message.toLowerCase() === 'upload success') {
                alert('Berhasil upload bukti pembayaran');
            }
        })
        .catch(err => {
            alert('Terjadi error saat mengupload gambar')
        });
}

const getTransactionsHistory = (nik, token) => {
    return dispatch => {
        fetch(`${API.BASE_URL}/user/${nik}/transactions/history`, {
            method: 'GET',
            headers: {
                Authorization: `Basic ${token}`
            }
        })
            .then(response => response.json())
            .then(responseJSON => {
                dispatch({
                    type: GET_HISTORY,
                    data: responseJSON
                })
            })
            .catch(err => {
                console.log(err);
                alert('Gagal mendapatkan data')
            })
    }
}

export { GET_LIMIT, LOAN, GET_TRANSACTIONS, PAY, GET_HISTORY };
export { getUserLimit, loanMoney, getTransactionsList, payBill, getTransactionsHistory };