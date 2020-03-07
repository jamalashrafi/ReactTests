import { SAVE_COMMENT, FETCH_COMMENTS, AUTH_TOKEN } from 'actions/types.js';

export default function(state = false, action){
    switch(action.type){
        case AUTH_TOKEN:
            return action.payload;
        default:
             return state;
    }
}
