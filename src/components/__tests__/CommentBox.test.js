import React from 'react';
import CommentBox from 'components/CommentBox.js';
import { mount } from 'enzyme';
import Root from 'Root.js';

let wrapper;
beforeEach(() =>{
   wrapper = mount(<Root>
                     <CommentBox />
                    </Root>
   );
});

afterEach(()=>{
   wrapper.unmount();
});

it('contains a text area and a button', ()=>{
   expect(wrapper.find("textarea").length).toEqual(1);
   expect(wrapper.find("button").length).toEqual(2);
});

   describe('', () =>{

      beforeEach(()=>{
         wrapper.find( 'textarea').simulate('change',{ target : {
            value : 'new comment'}
            });
         wrapper.update();
      });



      it('has a textarea where user can type in ',() => {
         expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
      });

      it(' has cleared the textarea on form the submit', () =>{
         expect(wrapper.find('form').simulate('submit'));
         wrapper.update();
         expect(wrapper.find('textarea').prop('value')).toEqual('');
      });

});

