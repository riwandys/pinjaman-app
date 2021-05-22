import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import adminReducer from '../reducers/admin';
import authReducer from '../reducers/auth';
import userReducer from '../reducers/user';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    user: userReducer
});

export default store = createStore(rootReducer, applyMiddleware(ReduxThunk));