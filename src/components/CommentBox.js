import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions' ;
import requireAuth from 'components/requireAuth.js';

class CommentBox extends Component {

    state ={ comment : ''};
   
    handleChange = event =>{
        this.setState({ comment : event.target.value });    
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment : '' });
    }

    render(){
        return(
            <div>
                <div>
                    <h4>Comment Box</h4>
                    <form onSubmit={ this.handleSubmit }>
                        <textarea value={ this.state.comment } onChange={this.handleChange} />
                        <div>
                            <button>Submit Component</button>
                        </div>
                    </form>
                    </div>
                    <div>
                    <button 
                    className = 'fetch-comments'
                    onClick = { this.props.fetchComments }>Fetch Comments</button>
                </div>
            </div>
        );
    }
}



export default connect(null, actions)(requireAuth(CommentBox));