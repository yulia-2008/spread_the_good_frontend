import React, { Component } from 'react';

class PostForm extends Component {
   state={
       title: "",
       description: "kk",
       image: ""      
   }
//    I put image in state  because I might change it for image of the post, not image of user 

   changeHandler = event => {this.setState({ [event.target.name]: event.target.value})
   }

   postFormSubmitHandler = event => {event.preventDefault()
    let options = { method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${this.props.currentUser.jwt}`
                    },
                    body: JSON.stringify({
                           post: { user_id: this.props.currentUser.user.id,                               
                                 image: this.props.currentUser.user.image,
                                 title: this.state.title,   
                                 description: this.state.description,                                                            
                                 active: true
                          }
                    })
                   }
        fetch('http://localhost:4000/api/v1/posts', options)
        .then(response => response.json())
        .then(this.props.postFormSubmitHandler()
         )
        event.target.reset()
       
        // need to add rendering a new post in a PostsContainer (it is rendering only after reload)
}
    
    render() {
        return ( this.props.currentUser==="" ? <h3>Please login</h3> :
            <div> 
         <h4> </h4>
          <form onSubmit = {event => this.postFormSubmitHandler(event)}>
              
              <input type="text"  name="title"  
                     placeholder = "Title"
                     onChange={this.changeHandler}></input>
              <br/><br/> 

              <textarea  type="text"  name="description" rows="15"
                        placeholder = "Enter your text"
                        onChange={this.changeHandler}>                           
              </textarea>
              <br/><br/> 

              <input  type="submit" value="Submit"></input>           
          </form> 
        
        </div>
        );
    }
}

export default PostForm;
