import React, { Component } from 'react';
import EditPostForm from "./EditPostForm";
import Comment from "./Comment"

class YourPost extends Component {
    state={
        post: "g",
      
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
   const token = localStorage.getItem("token")
   let options = { method: 'PATCH',
   headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json',
   Authorization: `Bearer ${token}`
   },
   body: JSON.stringify({
        title: state.title,                           
        description: state.description            
       })
   }

fetch(`http://localhost:4000/api/v1/posts/${this.props.post.id}`, options)
.then(response => response.json())
.then(resp => {this.setState({post: resp})
; this.props.editFormSubmitHandler()
})

}

// karmaUp = () => {this.props.karmaUp()

// }

// comments = () => {  
//     return this.state.post.comments.map((comm) => <Comment key={comm.id}
//                                                            post = {this.state.post}
                         
//                                                            profile = {this.props.profile} 
//                                                            addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
//                                                            currentUser = {this.props.currentUser}/>  )             
// }

componentDidMount(){ 
    const token = localStorage.getItem("token")
    fetch(`http://localhost:4000/api/v1/posts/${this.props.post.id}`,{
        method: "GET",
        headers: {
           'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`                                        
            }} )
       .then(response => response.json())
       .then(resp =>  {
              this.setState({post: resp})}
           )       
}
    render() { 
             console.log("your post", this.state.post)
        return ( 
              
               <div id= "profile-your-post">
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
                         addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
                         currentUser = {this.props.currentUser}/>       

              {/* <p>{this.comments()}</p> */}

              {this.state.post.helper ? 
                    <p> Helper: {this.state.post.helper.username} ({this.state.post.helper.karma_score})
                    <img  id="your-helper-avatar" src={this.state.post.helper.image}></img>
                   
                    <button  onClick={() => this.props.karmaUp(this.state.post.helper)}> Done </button> 
                    </p>
                    :null}        
              </div>
              

               
                                   
                                

            
        );
    }
}

export default YourPost;
