import React, { Component } from 'react';
import EditPostForm from "./EditPostForm";
import Comment from "./Comment"

class YourPost extends Component {
    state={
        post: this.props.post,     
        editClicked: false,
        doneClicked: false,
        styleObj: {}
    }

//     post = () => { fetch(`http://localhost:4000/api/v1/posts/${this.props.postId}`)
//                    .then(response => response.json())
//                 //    .then (resp =>  {this.setState({post: resp}); console.log(resp) 
//                 //   });
//                 .then(resp =>{ return resp})
//  }
editClickHandler=()=> {this.setState({editClicked: !this.state.editClicked})

}
    
editFormSubmitHandler = (state) => { this.setState({editClicked: false})

this.props.editFormSubmitHandler(state, this.state.post.id)
}

 karmaUp = () => {this.setState({doneClicked: true, 
                                //  styleObj: {border: "3px solid rgb(172, 171, 171)", backgroundColor: "lightgrey"}
                                })
    this.props.karmaUp(this.state.post )
  }
  
// karmaUp = () => { this.props.karmaUp(this.state.post.helper)
//     const token = localStorage.getItem("token")
//     fetch(`http://localhost:4000/api/v1/posts/${this.props.post.id}`, {
//         method: "GET", 
//         headers: {Authorization: `Bearer ${token}`},
//          })
//     .then(response => response.json())
//     .then(resp => {this.setState({post: resp, doneClicked: true })
    
//     })
// }

// comments = () => {  
//     return this.state.post.comments.map((comm) => <Comment key={comm.id}
//                                                            post = {this.state.post}
                         
//                                                            profile = {this.props.profile} 
//                                                            addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
//                                                            currentUser = {this.props.currentUser}/>  )             
// }

// componentDidMount(){ 
//     const token = localStorage.getItem("token")
//     fetch(`http://localhost:4000/api/v1/posts/${this.props.post.id}`,{
//         method: "GET",
//         headers: {
//            'Content-Type': 'application/json',
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`                                        
//             }} )
//        .then(response => response.json())
//        .then(resp =>  {
//               this.setState({post: resp})}
//            )       
// }
    render() { 
            //  console.log("your post", this.state.post)
        return ( 
              
               <div id= "profile-your-post" styleObj={this.state.styleObj}>
                <h3>{this.state.post.title}</h3> 
                <p>Post description:  </p> 
                <p>{this.state.post.description}</p> 

                <p> <button  onClick={this.editClickHandler}>Edit</button>  
                    <button  onClick={ () => this.props.deleteClickHandler(this.state.post.id)}>Delete</button>
                    {/* <button  onClick={ () => this.props.deleteClickHandler(this.state.post.id)}>Marked as solved </button> */}
                </p>
                {this.state.editClicked ? <EditPostForm post = {this.state.post} editFormSubmitHandler = {this.editFormSubmitHandler}/> :null}

                        <Comment post = {this.state.post}
                         
                         profile = {this.props.profile} 
                         addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
                         currentUser = {this.props.currentUser}/>        

          

              {this.state.post.helper ?
                   this.state.doneClicked ? 
                         <p> 
                           Helper {this.state.post.helper.username} ({this.state.post.helper.karma_score})
                           <img  id="your-helper-avatar" src={this.state.post.helper.image}></img><br/>
                           
                         </p>  
                         :<p> 
                           Helper {this.state.post.helper.username} ({this.state.post.helper.karma_score})
                           <img  id="your-helper-avatar" src={this.state.post.helper.image}></img><br/>                  
                           <button  onClick={this.karmaUp}> Done </button>  
                          </p>
                    :null }      
              </div>
              

               
                                   
                                

            
        );
    }
}

export default YourPost;
