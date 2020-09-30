import React, { Component } from 'react';
import YourPost from './YourPost';

const token = localStorage.getItem("token")

class YourPosts extends Component {
    state={
        posts: []
    }
      
  editFormSubmitHandler = (state, postId) => {
  
    let updatePost = this.state.posts.find((post) => post.id === postId)
    updatePost.title = state.title
    updatePost.description = state.description

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

fetch(`http://localhost:4000/api/v1/posts/${postId}`, options)
.then(response => response.json())
 this.props.editFormSubmitHandler(state, postId)

  }  

  karmaUp = post => {
      let updatedPosts = [...this.state.posts]
    let updateKarma = updatedPosts.filter((p) => p.helper_id === post.helper_id)
    updateKarma.map((post) => post.helper.karma_score++)
    this.setState({posts: updatedPosts})
    // console.log(this.state.posts)
    const token = localStorage.getItem("token")
    let optionsKarma = { method: 'PATCH',
                  headers: {
                 'Content-Type': 'application/json',
                  Accept: 'application/json',
                  Authorization: `Bearer ${token}`                                         
                  },
                  body: JSON.stringify({                                                
                        karma_score: post.helper.karma_score + 1,                                                
                  })
                }      
     fetch(`http://localhost:4000/api/v1/users/${post.helper.id}`, optionsKarma)  
     .then(response => response.json()) 
    //  .then( resp => { console.log("Your posts Patch karma", resp)})

     

this.props.karmaUp(post)
  }

    deleteClickHandler = postId => {  
        let updatedPosts = this.state.posts.filter((post) => post.id !== postId)
        // console.log(updatedPosts)
        this.setState({posts: updatedPosts})

        let options = { method: 'DELETE',
                       headers: { Authorization: `Bearer ${token}`
                      } 
                      }
       fetch(`http://localhost:4000/api/v1/posts/${postId}`, options);
      this.props.deleteClickHandler(postId)
    
    }

    posts = () => {  
        return this.state.posts.map((post) => <YourPost key={post.id} post={post} 
                                                        currentUser={this.props.currentUser}
                                                        karmaUp = {this.karmaUp}
                                                        addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
                                                        // profile = {this.props.profile}
                                                        editFormSubmitHandler = {this.editFormSubmitHandler}
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
           .then(resp => { this.setState({ posts: resp.user_posts } 
            )
               })       
    }

    render() { 
            //    console.log( "your postst",  this.state.posts)
        return (
            <>              
             <ul>{this.posts()}</ul>  
            </>
        );
    }
}

export default YourPosts;
