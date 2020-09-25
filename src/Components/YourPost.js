import React, { Component } from 'react';
import EditPostForm from "./EditPostForm";
import HelpedYou from "./HelpedYou";
import Comment from "./Comment"

class YourPost extends Component {
    state={
        post: this.props.post,
        clicked: false
    }

//     post = () => { fetch(`http://localhost:4000/api/v1/posts/${this.props.postId}`)
//                    .then(response => response.json())
//                 //    .then (resp =>  {this.setState({post: resp}); console.log(resp) 
//                 //   });
//                 .then(resp =>{ return resp})
//  }
editClickHandler=()=> {this.setState({clicked: !this.state.clicked})

}
    
editFormSubmitHandler = (state) => { this.setState({clicked: false})
   let options = { method: 'PATCH',
   headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json',
   Authorization: `Bearer ${this.props.currentUser.jwt}`
   },
   body: JSON.stringify({
        title: state.title,                           
        description: state.description            
       })
   }

fetch(`http://localhost:4000/api/v1/posts/${this.state.post.id}`, options)
.then(response => response.json())
.then(resp => {this.setState({post: resp})
; this.props.editFormSubmitHandler()
})

}
    render() {
        return ( 
             <div id="app-containers"> 
               <div id= "profile-containers">
                <h3>{this.state.post.title}</h3> 
                <p>Post description:  </p> 
                <p>{this.state.post.description}</p> 

                <p> <button  onClick={  this.editClickHandler}>Edit</button>  
                    <button  onClick={ () => this.props.deleteClickHandler(this.state.post.id)}>Delete</button>
                    {/* <button  onClick={ () => this.props.deleteClickHandler(this.state.post.id)}>Marked as solved </button> */}
                </p>
                {this.state.clicked ? <EditPostForm editFormSubmitHandler = {this.editFormSubmitHandler}/> :null}

                <Comment post = {this.state.post}
                                            profile = {this.props.profile} 
                                            currentUser = {this.props.currentUser}/> 
              </div>
              {/* <div id="profile-containers">
                 <HelpedYou currentUser={this.props.currentUser}/>
              </div>   */}


                                   
                                

            </div>
        );
    }
}

export default YourPost;
