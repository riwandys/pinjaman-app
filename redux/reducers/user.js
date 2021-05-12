import { GET_LIMIT } from '../actions/user'

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
        default:
            break;
    }
    return state;
}