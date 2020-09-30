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
   this.props.createConnection(this.props.postObj.id)
   this.setState({clicked: true, styleObj: {border: "3px solid rgb(172, 171, 171)", backgroundColor: "lightgrey"}})
//     this.increaseKarmaScore() 
 }

// createConnection = () => {
//     const token = localStorage.getItem("token")
//     let options = { method: 'PATCH',
//                     headers: {
//                    'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                     Authorization: `Bearer ${token}`
                                            
//                     },
//                     body: JSON.stringify({                                                
//                           helper_id: this.props.currentUser.user.id, 
//                           active: false                       
//                     })
//                   }      
//      fetch(`http://localhost:4000/api/v1/posts/${this.props.postObj.id}`, options)  
//      .then(response => response.json()) 
//     //   .then(resp => console.log("Patch", resp))
    
// }

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
        //    console.log( "inside of Post", this.props.currentUser)
        return ( 
            <div  id="post-containers"  style={this.state.styleObj}  >
            
           
           <div >                  
                <img id="post-avatar" src = {this.props.postObj.image} alt=""></img>                
                <p id="name-avatar" > {this.props.postObj.user.username}&nbsp;
               (<span id="karma-score">{this.props.postObj.user.karma_score}</span>)</p> 
                <p id="city-avatar"> {this.props.postObj.user.city}</p> 
                 
           </div>   


           <div id="post-description">
                 <h3> {this.props.postObj.title}</h3>
                 <p> {this.props.postObj.description}</p>
                   

                 {/*                  
                 <p> Karma score: (not increasing right away , only increasing in profile)
                    {this.props.currentUser.user && this.props.postObj.id === this.props.currentUser.user.id ? 
                             this.props.karmaScore : this.props.postObj.user.karma_score}                   
                </p>                    */}

                 { !this.state.clicked  ?  <Comment post = {this.props.postObj}                                            
                                                    addCommentSubmitHandler = {this.props.addCommentSubmitHandler}                                             
                                                    currentUser = {this.props.currentUser}/> 
                                           : null
                 } 
                               

                 {/* does not show the button "offer your help" on your own posts */}

                 { this.props.currentUser.user && this.props.currentUser.user.id !== this.props.postObj.user_id ?
                         !this.state.clicked ? 
                               <button id="offer-your-help-button"  
                                       className="button" 
                                       onClick={this.clickHandler}>Offer your help</button>
                               :<h1>Thank you</h1>                   
                         : null
                 }
           
            </div> 
            </div>
        );
    };
}

export default Post;
    
