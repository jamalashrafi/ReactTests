import React from 'react';
import CommentList from 'components/CommentList.js';
import { mount } from 'enzyme';
import Root from 'Root.js';

let wrapper;

beforeEach(()=>{

    const initialState = {
       comments : ['comment1','comment2']
    }
    wrapper = mount(<Root initialState={ initialState }>
        <CommentList />
    </Root>
    );
  
});

it('creates one li for each comment',() => {
    expect(wrapper.find('li').length).toEqual(2);
});

it('creates one li for each comment',() => {
    expect(wrapper.render().text()).toContain('comment1');
    expect(wrapper.render().text()).toContain('comment2');
});

