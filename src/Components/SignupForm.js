import React, { Component } from 'react';

class SignupForm extends Component {
    render() {
        return (
            <div>
               
              <form onSubmit = {event => this.props.signUpHandler(event)}>

                  <label>User name:</label>                 
                  <input type="text"  name="name" 
                         onChange = {event=> this.props.changeHandler(event)}>
                  </input>
                  <br/>
                  

                  <label>Email:</label>
                  <input type="text"  name="email"
                         onChange = {event=> this.props.changeHandler(event)}>
                  </input>
                  <br/> 

                  <label>City:</label><br></br>
                  <input type="text"  name="city"
                         onChange = {event=> this.props.changeHandler(event)}>
                  </input>
                  <br/>         
                  
                  <label>Password:</label>
                  <input type="password"  name="password"
                         onChange = {event=> this.props.changeHandler(event)}>
                   </input>
                  <br/>

                  <label>Photo:</label>                 
                  <input type="text"  name="photo"
                         onChange = {event=> this.props.changeHandler(event)}> 
                  </input>
                  <br/><br/>
                  
                  <input id='signup-btn' className='login-btns' type="submit" value="Submit"></input>
              </form> 
            </div>
        );
    }
}

export default SignupForm;
