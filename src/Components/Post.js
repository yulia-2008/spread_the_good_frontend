import React, { Component } from 'react';
import Comment from "./Comment"

class Post extends Component {
    render() {
        return (
            <div>
                <p>Post title: {this.props.postObj.title}</p>
                <p> Post decription: {this.props.postObj.description}</p>
                {/* <img src = {this.props.postObj.image} alt=""></img> */}
                <Comment comments = {this.props.postObj.comments}/>
               
            </div>
        );
    }
}

export default Post;
