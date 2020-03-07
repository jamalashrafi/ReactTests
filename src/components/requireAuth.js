import React, { Component } from 'react';
import { connect } from 'react-redux';

export default CommentBox => {

    class ComposedComponent extends Component {

        componentDidMount(){
            this.shouldNavigateAway();
        }
    
        componentDidUpdate(){
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway(){
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }

        render(){
            return (
                <CommentBox { ...this.props }/>
            )
        }
    }
    function mapStateToProps(state){
        return {
            auth : state.auth
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
}