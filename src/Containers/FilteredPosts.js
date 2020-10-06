import React, { Component } from 'react';
import Post from "../Components/Post"

class FilteredPosts extends Component {
    
    state={
        posts:[]
    }

    
    filterPosts= () => {
            let filteredPosts = this.state.posts.filter((post) => post.user.city === this.props.searchResult && post.active )
            return filteredPosts.map(post => <Post key={post.id} postObj={post}
                                                   addCommentSubmitHandler = {this.props.addCommentSubmitHandler} 
                                                   createConnection={this.props.createConnection}
                                                   currentUser={this.props.currentUser}                                                    
                                             />) 
                                                    
    }

    componentDidMount(){      
            fetch(`http://localhost:4000/api/v1/posts`)
            .then(response => response.json())
            .then (resp =>  { this.setState({posts: resp}) 
            }) 
    }  
      
             render() {
                return (
                  <div id="posts-container">
                     { this.filterPosts()} 
                    </div>             
                );
            }
}
export default FilteredPosts;
