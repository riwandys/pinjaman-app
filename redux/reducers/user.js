import { GET_LIMIT, LOAN, GET_TRANSACTIONS, GET_HISTORY } from '../actions/user'

const initialState = {
    limit: {
        limit: 0,
        limit_remaining: 0
    },
    transactions: [],
    transactionHistory: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LIMIT:
            return {
                limit: {
                    limit: action.data.limit,
                    limit_remaining: action.data.limit_remaining
                },
                transactions: [...state.transactions],
                transactionHistory: [...state.transactionHistory]
            };
        case LOAN:
            const { limit } = state.limit;
            return {
                limit: {
                    limit: limit,
                    limit_remaining: action.limit_remaining
                },
                transactions: [...state.transactions],
                transactionHistory: [...state.transactionHistory]
            }
        case GET_TRANSACTIONS:
            return {
                limit: { ...state.limit },
                transactions: [...action.data]
            }
        case GET_HISTORY:
            return {
                limit: { ...state.limit },
                transactions: [...state.transactions],
                transactionHistory: [...action.data]
            }
        default:
            break;
    }
    return state;
}