import React, { Component } from 'react';
import Post from "../Components/Post"

class PostsContainer extends Component {
    renderPosts = () => this.props.postsArray.map(post => <Post key={post.id} postObj={post}/>)
    render() {
        return (
            <div id="container">
                 {this.renderPosts()}
                 <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                <p bla></p>
                
            </div>
        );
    }
    
}

export default PostsContainer;
