import React, { Component } from 'react';

class PostForm extends Component {
   state={
       title: "",
       description: "",
       image: ""      
   }
//    I put image in state  because I might change it for image of the post, not image of user 

   changeHandler = event => {this.setState({ [event.target.name]: event.target.value})
   }

   signUpHandler = event => {event.preventDefault()
    let options = { method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${this.props.currentUser.jwt}`
                    },
                    body: JSON.stringify({
                           post: { user_id: this.props.currentUser.user.id,
                                 description: this.state.description,
                                 image: this.props.currentUser.user.image,
                                 title: this.state.title,                                                                
                                 active: true
                          }
                    })
                   }
        fetch('http://localhost:4000/api/v1/posts', options)
        .then(response => response.json())
        .then(resp => { console.log(resp)
         })
        event.target.reset()
        // need to add rendering a new post in a PostsContainer (it is rendering only after reload)
}
    
    render() {
        return ( this.props.currentUser==="" ? "Please login first" :
            <div> 
         <h4> Post Form</h4>
          <form onSubmit = {event => this.signUpHandler(event)}>
              <label>User name:</label>                
              <input type="text"  name="username" 
                     value={this.props.currentUser.user.username}  
                     onChange={this.changeHandler}></input>
              <br/><br/>
              
              <label>Email:</label>
              <input type="text"  name="email" 
                     value={this.props.currentUser.user.email}                   
                     onChange={this.changeHandler}></input>
              <br/><br/> 

              <label>City:</label>
              <input type="text"  name="city" 
                     value="Hunter" 
                     onChange={this.changeHandler} >
                     </input>
              <br/><br/>     
              
              <input type="text"  name="title"  
                     defaultValue = "Title"
                     onChange={this.changeHandler}></input>
              <br/><br/> 

              <textarea type="text"  name="description" 
                        defaultValue = "Enter your text"
                        onChange={this.changeHandler}>                           
              </textarea>
              <br/><br/> 

              <input id='signup-btn' className='login-btns' type="submit" value="Submit"></input>           
          </form> 
        
        </div>
        );
    }
}

export default PostForm;
