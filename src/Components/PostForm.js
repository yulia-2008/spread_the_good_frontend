import React, { Component } from 'react';

class PostForm extends Component {
    
    render() {
        return (
            <div> 
          
       

          <form onSubmit = {event => this.props.signUpHandler(event)}>
              <label>User name:</label>                 
              <input type="text"  name="username" value="Olia"></input>
              <br/>
              
              <label>Email:</label>
              <input type="text"  name="email" value="my_email" placeholder="my_email"></input>
              <br/> 

              <label>City:</label><br></br>
              <input type="text"  name="city" value="Hunter" placeholder="Hunter"></input>
              <br/>         
              
              <label>Title:</label>
              <input type="text"  name="title"></input>
              <br/>

              {/* <label>Text:</label>                  */}
              <textarea type="text"  name="text">Enter your Text</textarea>
              <br/>

              <input id='signup-btn' className='login-btns' type="submit" value="Submit"></input>           
          </form> 
        
        </div>
        );
    }
}

export default PostForm;
