import React, { Component } from 'react';

class EditPostForm extends Component {
    state={
        title: this.props.post.title,
        description: this.props.post.description,
        image: ""      
    }
 //    I put image in state  because I might change it for image of the post, not image of user 
 
    changeHandler = event => {this.setState({ [event.target.name]: event.target.value})
    }

    editFormSubmitHandler = event => {event.preventDefault()
        this.props.editFormSubmitHandler(this.state)
    } 
                    
    render() {
        return (
           
            <div> 
         <h4> </h4>
          <form onSubmit = {event => this.editFormSubmitHandler(event)}>
              
              <input type="text"  name="title"  
                     placeholder = "Title"
                     onChange={this.changeHandler}></input>
              <br/><br/> 

              <textarea id="textarea-input" type="text"  name="description" rows="15"
                        placeholder = "Enter your text"
                        onChange={this.changeHandler}>                           
              </textarea>
              <br/>

              <input className="button" type="submit" value="Submit"></input>           
          </form> 
        
        </div>
        );
           
        
    }
}

export default EditPostForm;
