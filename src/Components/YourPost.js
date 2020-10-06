import React, { Component } from 'react';
import EditPostForm from "./EditPostForm";
import Comment from "./Comment"

class YourPost extends Component {
    state={
        post: this.props.post,     
        editClicked: false,
    }


editClickHandler=()=> {this.setState({editClicked: !this.state.editClicked})
}
    
editFormSubmitHandler = (state) => { this.setState({editClicked: false})
this.props.editFormSubmitHandler(state, this.state.post.id)
}

 karmaUp = () => {
            // changing post to solved   
                             
    let updatedPost = this.state.post
    updatedPost.archived=true
    this.setState({post: updatedPost})
 
      
    const token = localStorage.getItem("token")
    let optionsPost = { method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`                                         
                        },
                        body: JSON.stringify({                                                
                        archived: true,                                                
                        })
                      }  
   
    fetch(`http://localhost:4000/api/v1/posts/${this.state.post.id}`, optionsPost)  
    .then(response => response.json()) 
    //  .then( resp => {   this.setState({post: resp})})

    this.props.karmaUp(this.state.post)
  }
 
styleObj = () => {let styleObj
    this.state.post.archived ? styleObj={border: "3px solid rgb(172, 171, 171)", backgroundColor: "lightgrey"}
                             : styleObj={}
    return styleObj           
 }

    render() { 
              console.log("your post", this.state.post.helper)
        return ( 
               <div id= "profile-your-post"  style={this.styleObj()}>
                <h3>{this.state.post.title}</h3> 
            
                <p> &nbsp;  {this.state.post.description}</p> 

                <p> <button className="button" onClick={this.editClickHandler}>Edit</button>  
                    <button className="button" onClick={ () => this.props.deleteClickHandler(this.state.post.id)}>Delete</button>                
                </p>
                {this.state.editClicked ? <EditPostForm post = {this.state.post} editFormSubmitHandler = {this.editFormSubmitHandler}/> :null}

                        <Comment post = {this.state.post}                         
                                 profile = {this.props.profile} 
                                 addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
                                 currentUser = {this.props.currentUser}
                                 />  

              {this.state.post.helper ?
                   this.state.post.archived ?
                           <>
                               <h4>Helper:</h4>
                               <img  id="your-helper-avatar" src={this.state.post.helper.image}></img>
                               <p id="your-helper-name">  {this.state.post.helper.username} 
                               (<span id="karma-score">{this.state.post.helper.karma_score}</span>)  </p>                            
                           </> :
                            <>
                                <h4>Helper:</h4>
                                <img  id="your-helper-avatar" src={this.state.post.helper.image}></img> 
                               <p> {this.state.post.helper.username} 
                               (<span id="karma-score">{this.state.post.helper.karma_score}</span>) </p>                                        
                                <button className="button" onClick={this.karmaUp}> Done </button>  
                            </>
                    :null }      
              </div>
        
        );
    }
}

export default YourPost;
