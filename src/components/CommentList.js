import React,{ Component } from 'react';
import { connect } from 'react-redux';


 class CommentList extends Component {

    renderComments(){
        return this.props.comments.map( comment =>{
     //   [1,2,3,4,5].map( (comment,i) => {
           
            //   i == 0 ? 
          //     return   <span>z<img src='' alt='img' /><li key = { comment }>{ comment }</li> : 
               return  <li key = { comment }>{ comment }</li>
            
        });
    }

    render(){
        return(
            <div>
                <h4>Component List</h4>
                <ul>
                    { this.renderComments()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { comments : state.comments };
}

export default connect(mapStateToProps)(CommentList);