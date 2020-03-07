import { SAVE_COMMENT } from 'actions/types.js';
import commentsReducers from 'reducers/comments.js';

it('handles actions of type SAVE_COMMENT',() => {

    const action ={
        type: SAVE_COMMENT,
        payload : 'New Comment'
    }

    const newState = commentsReducers([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handle the action of unknown types',() => {

    const newState = commentsReducers([], {});

    expect(newState).toEqual([]);
})