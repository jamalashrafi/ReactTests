import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments.js';
import authReducer from 'reducers/auth.js';

export default combineReducers({
    comments: commentsReducer,
    auth : authReducer
});