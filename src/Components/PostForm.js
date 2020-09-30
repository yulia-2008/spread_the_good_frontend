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

   postFormSubmitHandler = event => {event.preventDefault()
    const token = localStorage.getItem("token")
    let options = { method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
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
        .then(resp => this.props.postFormSubmitHandler(resp)
         )
        // this.props.postFormSubmitHandler()
        event.target.reset()
       
        // need to add rendering a new post in a PostsContainer (it is rendering only after reload)
}
    
    render() {
        return ( this.props.currentUser ?  
            <div> 
         <h4> </h4>
          <form onSubmit = {event => this.postFormSubmitHandler(event)}>
              
              <input type="text"  name="title"  
                     placeholder = "Title"
                     onChange={this.changeHandler}></input>
              <br/><br/> 

              <textarea  type="text" id="textarea-input" name="description" rows="15"
                        placeholder = "Enter your text"
                        onChange={this.changeHandler}>                           
              </textarea>
              <br/><br/> 

              <input  type="submit" value="Submit"></input>           
          </form>        
        </div>
: <h3>Please login</h3>

        );
    }
}

export default PostForm;
