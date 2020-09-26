import React, { Component } from 'react';
import PostYouHelped from "../Components/PostYouHelped"

class PostsYouHelped extends Component {

 renderPosts = () => {  return this.props.posts.map(post => 
                          <PostYouHelped key={post.id} postObj={post} currentUser={this.props.currentUser}/>)
} 
  
     
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
