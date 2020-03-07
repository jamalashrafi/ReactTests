import { SAVE_COMMENT } from 'actions/types.js';
import { saveComment } from 'actions';

describe('it tests the SAVE_COMMENT action type',() => {

    it('returs the SAVE_COMMENT action type',() => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('returns the payload',() =>{
        const action = saveComment('Hello');

        expect(action.payload).toEqual('Hello');
    });
})