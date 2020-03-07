import React,{ Components } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from 'components/App.js';
import CommentBox from 'components/CommentBox.js';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(()=>{
    wrapper = shallow(<App />);
});

it('shows the comment box',()=>{
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
     
    // expect(div.innerHTML).toContain('Comment Box');
    //ReactDOM.unmountComponentAtNode(div);
   
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows the comment list',() => {

    expect(wrapper.find(CommentList).length).toEqual(1);
})