import React, { Component } from 'react';
import YourPost from './YourPost';

const token = localStorage.getItem("token")

class YourPosts extends Component {
    state={
        posts: []
    }
      
    

    deleteClickHandler = postId => {  


        let updatedPosts = this.state.posts.filter((post) => post.id !== postId)
        console.log(updatedPosts)
        this.setState({posts: updatedPosts})

        let options = { method: 'DELETE',
        headers: { Authorization: `Bearer ${token}`
            }, 
         }
       fetch(`http://localhost:4000/api/v1/posts/${postId}`, options);
      this.props.deleteClickHandler(postId)
    
    }

    posts = () => {  
        return this.state.posts.map((post) => <YourPost key={post.id} post={post} 
                                                        currentUser={this.props.currentUser}
                                                        // profile = {this.props.profile}
                                                        editFormSubmitHandler = {this.props.editFormSubmitHandler}
                                                        deleteClickHandler={this.deleteClickHandler}/> )             
    }
    componentDidMount(){ 
        const token = localStorage.getItem("token")
        fetch(`http://localhost:4000/api/v1/users/${this.props.currentUser.user.id}`,{
            method: "GET",
            headers: {
               'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`                                        
                }} )
           .then(response => response.json())
           .then(resp => {
               this.setState({ posts: resp
                 }, console.log("your posts, did mount", resp))
               })
        
        }

    render() { 
        // console.log( "postsss",  this.state.posts)
        return (
            <div >
                All my posts.
            
               <ul>{this.posts()}</ul> 
            </div>
        );
    }

}

export default YourPosts;
