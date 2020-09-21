import React, { Component } from 'react';
import Comment from "./Comment"

class Post extends Component {
    render() {
        return (
           <div id="app-containers">         
                <img id="post-avatar" src = {this.props.postObj.image} alt=""></img> 
                <p>{this.props.postObj.user.karma_score}</p>          
            <div id="post-description">
                <p>Post title: {this.props.postObj.title}</p>
                <p> Post decription: {this.props.postObj.description}</p>
                <p>Autor: {this.props.postObj.user.username}</p>
               
                {this.props.postObj.comments && this.props.postObj.comments.length >=1 ? 
                    <> <p>Comments:</p>
                       <Comment post = {this.props.postObj}/> 
                    </>
                    : null
                } 
                 <button  onClick={this.clickHandler}>Offer your help</button>            
            </div>
            </div>
        );
    }
}

export default Post;
