import React, { Component } from 'react';
import Comment from "./Comment"



class Post extends Component {
    
    state={ 
        clicked: false,
        styleObj: {}
        // cssId: "post-card"    
        // userKarmaUp: ""
    }

clickHandler = () => {  
   this.createConnection()
   this.setState({clicked: true, styleObj: {border: "3px solid rgb(172, 171, 171)", backgroundColor: "lightgrey"}})
//     this.increaseKarmaScore() 
 }

createConnection = () => {
    const token = localStorage.getItem("token")
    let options = { method: 'PATCH',
                    headers: {
                   'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                                            
                    },
                    body: JSON.stringify({                                                
                          helper_id: this.props.currentUser.user.id, 
                          active: false                       
                    })
                  }      
     fetch(`http://localhost:4000/api/v1/posts/${this.props.postObj.id}`, options)  
     .then(response => response.json()) 
    //   .then(resp => console.log("Patch", resp))
    
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

// commentSubmitHandler = comment => {

// }

    render() {
        //   console.log( "inside of Post", this.props.postObj)
        return ( 
            <div  id="app-containers" style={this.state.styleObj}>
            
           
           <div >                  
                <img id="post-avatar" src = {this.props.postObj.image} alt=""></img> 
        <p> {this.props.postObj.user.username} ({this.props.postObj.user.karma_score})</p> 
                 <p> {this.props.postObj.user.city}</p> 
            </div>            
                <div id="post-description">
                    <h3> {this.props.postObj.title}</h3>
                    <p> {this.props.postObj.description}</p>
                   

                 {/*                  
                 <p> Karma score: (not increasing right away , only increasing in profile)
                    {this.props.currentUser.user && this.props.postObj.id === this.props.currentUser.user.id ? 
                             this.props.karmaScore : this.props.postObj.user.karma_score}                   
                </p>                    */}
             
               
               
                              {/* {this.props.postObj.comments && this.props.postObj.comments.length >=1 ?  */}
                                 <> 
                                { !this.state.clicked ? 
                                    <Comment post = {this.props.postObj}
                                             
                                             addCommentSubmitHandler = {this.props.addCommentSubmitHandler} 
                                            //  profile = {this.props.profile}  
                                             currentUser = {this.props.currentUser}/> 
                                             : null}
                                 </>
                                {/* : null } */}

                 {/* does not show the button "offer your help" on your own posts */}

                 { this.props.currentUser.user && this.props.currentUser.user.id !== this.props.postObj.user_id ?
            !this.state.clicked ? 
         <button id="offer-your-help-button" onClick={this.clickHandler}>Offer your help</button>
          : "Thank you"                  
    : null
}
           
            </div> 
            </div>
        );
    };
}

export default Post;
    
