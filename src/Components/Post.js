import React, { Component } from 'react';
import Comment from "./Comment"

class Post extends Component {
    
    state={      
        userKarmaUp: ""
    }

clickHandler = () => {  
   this.createConnection()
    this.increaseKarmaScore() 
}

createConnection = () => {
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
}

increaseKarmaScore = () => { 
                let options = { method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json',
                       Accept: 'application/json',
                       Authorization: `Bearer ${this.props.currentUser.jwt}`
                       },
                    body: JSON.stringify({ karma_score: this.props.currentUser.user.karma_score + 1
                    })
                  }
     fetch(`http://localhost:4000/api/v1/users/${this.props.currentUser.user.id}`, options)
     .then(response => response.json())
     .then (resp => {this.setState({userKarmaUp: resp});  this.props.offerHelpClickHandler(resp )
     });
} 

// commentSubmitHandler = comment => {

// }

    render() {
        return ( 
           <div id="app-containers">                  
                <img id="post-avatar" src = {this.props.postObj.image} alt=""></img> 
                        
            <div id="post-description">
                <h3> {this.props.postObj.title}</h3>
                <p> {this.props.postObj.description}</p>
                <p>Autor: {this.props.postObj.user.username}</p>
                 
                {/* <p> Karma score: (not increasing right away , only increasing in profile)
                    {this.props.currentUser.user && this.props.postObj.id === this.props.currentUser.user.id ? 
                             this.props.karmaScore : this.props.postObj.user.karma_score}                   
                </p>                   */}
                <p>Location: {this.props.postObj.user.city}</p> 
               
               
                              {/* {this.props.postObj.comments && this.props.postObj.comments.length >=1 ?  */}
                                 <> 
                                    <Comment post = {this.props.postObj} 
                                             commentSubmitHandler = {this.commentSubmitHandler}
                                             currentUser = {this.props.currentUser}/> 
                                 </>
                                {/* : null } */}

                 {/* does not show the button "offer your help" on your own posts */}
                { this.props.currentUser.user && this.props.currentUser.user.id !== this.props.postObj.user_id ?
                   <button id="offer-your-help-button" onClick={this.clickHandler}>Offer your help</button> : null
                }           
            </div>
            </div>
        );
    }
}

export default Post;
