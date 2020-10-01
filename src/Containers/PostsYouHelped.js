import React, { Component } from 'react';
import PostYouHelped from "../Components/PostYouHelped"

class PostsYouHelped extends Component {

//   state={
    
//     posts: this.props.posts,
  
// }


 renderPosts = () => {  return this.props.posts.map(post => 
                          <PostYouHelped key={post.id} postObj={post} 
                          addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
                          updatedKarma = {this.props.updatedKarma}
                          currentUser={this.props.currentUser}/>)
} 
  
//    componentDidUpdate(prevProps) {
//   if (this.props.updatedKarma !== prevProps.updatedKarma) {
//   const token = localStorage.getItem("token")
//          fetch(`http://localhost:4000/api/v1/helpers/${this.props.currentUser.user.id}`, {
//              method: "GET",
//              headers: {
//                 'Content-Type': 'application/json',
//                  Accept: 'application/json',
//                  Authorization: `Bearer ${token}`
                                         
//                  }
//          })
//         .then(response => response.json())
//         .then(resp =>this.setState({posts: resp}))
//   }
//   console.log("did update", this.state.posts)
// }  
         render() {
           //  console.log("post container", this.props.posts)
            return (
              <div id="posts-container">
  
                 {this.renderPosts()}  
                
                </div> 
            );
        }
  }

export default PostsYouHelped;
