import { LOGIN } from '../actions/auth'

const initialState = {
    nik: null,
    email: null,
    role: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return action.data;
        default:
            break;
    }
    return state;
}