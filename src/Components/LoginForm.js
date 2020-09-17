import React, { Component } from 'react';

class LoginForm extends Component {
    
    render() {
        return (
            <div> 
              <form onSubmit = {event => this.props.loginHandler(event)}>
                <label>User name:</label>
                <br/>
                <input type="text"  name="name"
                       onChange = {event=> this.props.changeHandler(event)}>
                </input>
                <br/>
                <label>Password:</label>
                <br/>
                <input type="password"  name="password"
                       onChange = {event=> this.props.changeHandler(event)}>
                </input>
                <br/><br/>              
                  <input id='login-btn' className='login-btns' type="submit" value="Submit"></input>             
              </form>
             
            </div>
        );
    }
}

export default LoginForm;
