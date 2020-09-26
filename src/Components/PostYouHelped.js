import React, { Component } from 'react';

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
        //   console.log( "inside of Post", this.props.postObj)
        return ( 
            <div id="post-card-notActive">
            
           
           <div id="app-containers">                  
                <img id="post-avatar" src = {this.props.postObj.image} alt=""></img> 
                        
            <div id="post-description">
                <h3> {this.props.postObj.title}</h3>
                <p> {this.props.postObj.description}</p>
                  <p>Autor: {this.props.postObj.user.username}</p> 
                 <p>Location: {this.props.postObj.user.city}</p> 

                 {/*                  
                 <p> Karma score: (not increasing right away , only increasing in profile)
                    {this.props.currentUser.user && this.props.postObj.id === this.props.currentUser.user.id ? 
                             this.props.karmaScore : this.props.postObj.user.karma_score}                   
                </p>                    */}
             
               
               
                         
                                  
                                {/* { !this.state.clicked ? 
                                    <Comment post = {this.props.postObj}
                                            //  profile = {this.props.profile}  
                                             currentUser = {this.props.currentUser}/> 
                                             : null}  */}
                                
                               


            </div>
            </div> 
            </div>
        );
    };
}

export default PostYouHelped;
