import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root.js';
import App from 'components/App.js';

beforeEach(() => {
   moxios.install();
   moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
       status : 200,
       response : [{ name : 'Fetch #1'}, { name : 'Fetch #2'}]
   });
});

afterEach(() => {
    moxios.uninstall();
});

it('fetches a list of comments and display them',(done) => {

    const wrapper = mount(
        <Root>
            <App />
        </Root>
    );
    wrapper.find('.fetch-comments').simulate('click');
    
    
    //setTimeout(() => {
       moxios.wait(() => {
       wrapper.update();
       expect(wrapper.find('li').length).toEqual(2);
       done();
       wrapper.unmount();
    },100);
    //  });
      
   

});
