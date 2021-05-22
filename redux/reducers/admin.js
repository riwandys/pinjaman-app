import { GET_PENDING_TRANSACTIONS } from '../actions/admin'

const initialState = {
    usersCount: {
        pendingUsers: 0,
        confirmedUsers: 0
    },
    pendingTransactions: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PENDING_TRANSACTIONS:
            return {
                usersCount: {
                    pendingUsers: action.data.pending_confirmation,
                    confirmedUsers: action.data.confirmed_user
                },
                pendingTransactions: action.data.pending_transaction_list
            }
        default:
            break;
    }
    return state;
}