import API from "../../constants/api";

const GET_PENDING_TRANSACTIONS = 'GET_PENDING_TRANSACTIONS';

const getPendingTransactions = (token) => {
    return (dispatch) => {
        fetch(`${API.BASE_URL}/admin/pending-transactions`, {
            method: 'GET',
            headers: {
                Authorization: `Basic ${token}`
            }
        })
            .then(response => response.json())
            .then(responseJSON => {
                dispatch({
                    type: GET_PENDING_TRANSACTIONS,
                    data: responseJSON
                });
            })
            .catch(err => {
                console.log(err);
                alert('Terjadi error di sini')
            });
    }
}

export { GET_PENDING_TRANSACTIONS };
export { getPendingTransactions };