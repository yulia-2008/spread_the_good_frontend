import React, { Component } from 'react';
import Comment from "./Comment"

class Post extends Component {
    
    state={
        offerHelpClicked: false,
    }

clickHandler = (e) => {this.setState({offerHelpClicked: true})
    let options = { method: 'POST',
                    headers: {
                   'Content-Type': 'application/json',
                    Accept: 'application/json'
                    },
                    body: JSON.stringify({
                          connection:  {
                          help_seeker_id: this.props.postObj.user_id,
                          helper_id: this.props.currentUser.user.id
                          }
                    })
                  }      
     fetch('http://localhost:4000/api/v1/connections', options)  
     .then(response => response.json())
     .then(resp => { console.log(resp)
     }) 
    

}

    render() {
        return (
           <div id="app-containers">         
                <img id="post-avatar" src = {this.props.postObj.image} alt=""></img> 
                {/* <p>{this.props.postObj.user.karma_score}</p>           */}
            <div id="post-description">
                <p>Post title: {this.props.postObj.title}</p>
                <p> Post decription: {this.props.postObj.description}</p>
                {/* <p>Autor: {this.props.postObj.user.username}</p> */} 
                {/* line 9 &13, new post is added from post response and does not know about user */}
                {/* <p>Location: {this.props.postObj.user.city}</p> */}
               
                {this.props.postObj.comments && this.props.postObj.comments.length >=1 ? 
                    <> <p>Comments:</p>
                       <Comment post = {this.props.postObj}/> 
                    </>
                    : null }
                 {/* does not show the button "offer your help" on your own posts */}
                { this.props.currentUser.user && this.props.currentUser.user.id === this.props.postObj.user_id ? null:
                   <button id="offer-your-help-button" onClick={this.clickHandler}>Offer your help</button> 
                }           
            </div>
            </div>
        );
    }
}

export default Post;
