import React, { Component } from 'react';
import SignupForm from "../Components/SignupForm";
import LoginForm from "../Components/LoginForm";
import PostForm from "../Components/PostForm";

class FormContainer extends Component {
    render() {console.log("post form clicked", this.props.clicked.needHelpClicked);
    console.log("post form user", this.props.currentUser)
        return ( 
            <div id="form-container">               
                {this.props.clicked.loginClicked ? <LoginForm changeHandler={this.props.changeHandler}
                                                              loginHandler={this.props.loginHandler}
                                                              currentUser = {this.props.currentUser}
                /> : null}
                {this.props.clicked.signupClicked ? <SignupForm changeHandler={this.props.changeHandler}
                                                                signUpHandler={this.props.signUpHandler}
                                                                currentUser = {this.props.currentUser}
                /> : null}
                {this.props.clicked.needHelpClicked  ? <PostForm changeHandler={this.props.changeHandler}
                                                                currentUser = {this.props.currentUser}                                                           
                                                                postFormSubmitHandler = {this.props.postFormSubmitHandler}
                 /> : null}
            </div>
        );
    }
}

export default FormContainer;
