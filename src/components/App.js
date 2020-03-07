import React,{ Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox.js';
import CommentList from 'components/CommentList.js';


 class App extends Component {

    renderButton(){
    return !this.props.auth ? 
     <button onClick ={ ()=> this.props.authentication(true) } >Sign In </button> :
     <button onClick ={ ()=> this.props.authentication(false) } >Sign Out</button> ;
    }

    renderHeader(){
        return(
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/post'>
                    <li>Post a Comment</li>
                </Link>
                <Link>
                    { this.renderButton() }
                </Link>
            </ul>
        );
    }

    render(){
       
        return(
            <div>
                {  this.renderHeader() }
                <Route path='/post' component = { CommentBox } />
                <Route path='/' exact component = { CommentList } />
            </div>
        );
    }
}

function mapStateToProps(state){
    return { auth: state.auth}
}
export default connect (mapStateToProps, actions)(App);