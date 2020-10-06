import React, { Component } from 'react';

class ButtonContainer extends Component {
    render() {
        return (
            <div id="button-container">
                {this.props.currentUser.user ? 
                    <>
                      <button id='logout-button' className="button" onClick={this.props.clickHandler}>Logout</button>
                      <button id='create-post-button'  className="button"onClick={this.props.clickHandler}>Need Help?</button>
                    </>
                    :
                    <>
                       <button id='login-button' className="button" onClick={this.props.clickHandler}>Login</button>               
                       <button id='signup-button'  className="button"onClick={this.props.clickHandler}>Signup</button>
                    </>
                }
            </div>
        );
    }
}

export default ButtonContainer;
