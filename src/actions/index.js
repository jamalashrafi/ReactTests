import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, AUTH_TOKEN } from 'actions/types.js';

export function saveComment(comment){
    return {
        type : SAVE_COMMENT,
        payload : comment
    }
}

export function fetchComments(){

    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type : FETCH_COMMENTS,
        payload : response
    }
}

export function authentication(isLoggedIn) {
    return {
        type : AUTH_TOKEN,
        payload : isLoggedIn
    }
}