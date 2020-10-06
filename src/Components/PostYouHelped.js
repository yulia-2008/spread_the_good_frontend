import React, { Component } from 'react';
import Comment from "./Comment"

class PostYouHelped extends Component {
    state={ 
        clicked: false,
      
        // cssId: "post-card"    
        // userKarmaUp: ""
    }


// increaseKarmaScore = () => { 
//                 let options = { method: 'PATCH',
//                     headers: {
//                       'Content-Type': 'application/json',
//                        Accept: 'application/json',
//                        Authorization: `Bearer ${this.props.currentUser.jwt}`
//                        },
//                     body: JSON.stringify({ karma_score: this.props.currentUser.user.karma_score + 1
//                     })
//                   }
//      fetch(`http://localhost:4000/api/v1/users/${this.props.currentUser.user.id}`, options)
//      .then(response => response.json())
//      .then (resp => {this.setState({userKarmaUp: resp});  this.props.offerHelpClickHandler(resp )
//      });
// } 



    render() {
        //    console.log( "PostYou Helped", this.props.postObj)
        return ( 
            < div id="post-card-notActive">                     
                <div id="app-containers" > 
                  <div>                 
                    <img id="post-avatar" src = {this.props.postObj.image} alt=""></img> 
                    <p id="name-avatar">{this.props.postObj.user.username}&nbsp;  
                                        
                    {/* (<span id="karma-score">
                    {this.props.updatedKarma ? this.props.postObj.user.karma_score+1:
                                             this.props.postObj.user.karma_score}</span>) */}
                    </p>                   
                     <p id="city-avatar"> {this.props.postObj.user.city}</p>  
                  </div>
                    
              <div id="post-description">
                <h3> {this.props.postObj.title}</h3>
                <p> {this.props.postObj.description}</p>
                <Comment post = {this.props.postObj}
                         profile = {this.props.profile} 
                         addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
                         currentUser = {this.props.currentUser}
                         /> 
              </div>                    
            </div>
        </div>            
        );
    };
}

export default PostYouHelped;
