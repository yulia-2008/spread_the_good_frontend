import React, { Component } from 'react';
import YourPost from './YourPost';

class YourPosts extends Component {
    state={
        posts: []
    }

    deleteClickHandler = (postId) => { 

        let updatedPosts = this.state.posts.filter((post) => post.id !== postId)
        console.log(updatedPosts)
        this.setState({posts: updatedPosts})

        let options = { method: 'DELETE',
        headers: { Authorization: `Bearer ${this.props.currentUser.jwt}`
            }, 
         }
       fetch(`http://localhost:4000/api/v1/posts/${postId}`, options)
       

    }

    posts = () => {  
        return this.state.posts.map((post) => <YourPost postId={post.id} post={post} 
                                                        currentUser={this.props.currentUser}
                                                        deleteClickHandler={this.deleteClickHandler}/> )             
    }

    render() {
        return (
            <div id="profile-history">
                All my posts.
            
               <ul>{this.posts()}</ul> 
            </div>
        );
    }
componentDidMount(){
    fetch(`http://localhost:4000/api/v1/users/${this.props.currentUser.user.id}`)
       .then(response => response.json())
       .then (resp =>  {this.setState({posts: resp.posts})
       })
    }
}

export default YourPosts;
