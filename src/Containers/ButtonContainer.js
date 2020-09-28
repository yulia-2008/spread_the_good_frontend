import React, { Component } from 'react';

class ButtonContainer extends Component {
    render() {
        return (
            <div id="button-container">
                {this.props.currentUser ? 
                <button id='logout-button' onClick={this.props.clickHandler}>Logout</button>
                :<button id='login-button' onClick={this.props.clickHandler}>Login</button>
                }
                <button id='signup-button' onClick={this.props.clickHandler}>Signup</button>
                <button id='create-post-button' onClick={this.props.clickHandler}>Need Help?</button>
            </div>
        );
    }
}

export default ButtonContainer;
