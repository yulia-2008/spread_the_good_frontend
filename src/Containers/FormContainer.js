import React, { Component } from 'react';
import SignupForm from "../Components/SignupForm";
import LoginForm from "../Components/LoginForm";
import PostForm from "../Components/PostForm";

class FormContainer extends Component {
    render() {
        return (
            <div id="form-container">               
                {this.props.clicked.loginClicked ? <LoginForm changeHandler={this.props.changeHandler}
                                                              loginHandler={this.props.loginHandler}
                /> : null}
                {this.props.clicked.signupClicked ? <SignupForm changeHandler={this.props.changeHandler}
                                                                signUpHandler={this.props.signUpHandler}
                /> : null}
                {this.props.clicked.needHelpClicked ? <PostForm changeHandler={this.props.changeHandler}/> : null}
            </div>
        );
    }
}

export default FormContainer;
