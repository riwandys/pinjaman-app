import { AUTHENTICATE, LOGOUT } from '../actions/auth'

const initialState = {
    nik: null,
    email: null,
    role: null,
    name: null,
    token: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { ...action.data };
        case LOGOUT:
            return { ...initialState };
        default:
            break;
    }
    return state;
}