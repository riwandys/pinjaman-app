import { GET_LIMIT, LOAN } from '../actions/user'

const initialState = {
    limit: {
        limit: 0,
        limit_remaining: 0
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LIMIT:
            return { limit: action.data };
        case LOAN:
            const { limit } = state.limit;
            return {
                limit: {
                    limit: limit,
                    limit_remaining: action.limit_remaining
                }
            }
        default:
            break;
    }
    return state;
}