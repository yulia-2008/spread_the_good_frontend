import React, { Component } from 'react';
import YourPosts from "../Components/YourPosts";
import PostsYouHelped from  "./PostsYouHelped";



class Profile extends Component {
    state={
        post: "",
        helpedPosts: [],
        profile: true
    }
 
    componentDidMount(){ 
        const token = localStorage.getItem("token")
         fetch(`http://localhost:4000/api/v1/helpers/${this.props.currentUser.user.id}`, {
             method: "GET",
             headers: {
                'Content-Type': 'application/json',
                 Accept: 'application/json',
                 Authorization: `Bearer ${token}`
                                         
                 }
         })
        .then(response => response.json())
        .then(resp =>this.setState({helpedPosts: resp}))
         console.log("profile did mount")
}

    render() {
        return ( 
            //  console.log( "Profile helped postst", this.state.helpedPosts),            
        <div >
               <div id="app-containers">
                    <div id="div-profile-info">
                         <h2 id="profile-name">{this.props.currentUser.user.username} 
                         (<span id="karma-score">{this.props.currentUser.user.karma_score}</span>)</h2>
                         <p id="city"> {this.props.currentUser.user.city}</p>
                         <img id="profile-avatar" src={ this.props.currentUser.user.image} alt=""></img> 
                    </div>

                    <div id="gif-div">
                        <img id="gif" src="https://media.giphy.com/media/fdLR6LGwAiVNhGQNvf/giphy.gif" ></img>
                    </div>
                </div>
              
                {/* <p>Bio: {this.props.currentUser.user.bio} <button  onClick={this.bioClickHandler}>Fill out </button></p> */}
             
            <div id="app-containers">
                <div id="profile-containers">   
                     <h2 id="centered">I'm helping:  </h2>    
                         <PostsYouHelped  currentUser = {this.props.currentUser}
                                          addCommentSubmitHandler = {this.props.addCommentSubmitHandler}
                                          updatedKarma = {this.props.updatedKarma}                                   
                                          posts = {this.state.helpedPosts}
                                          />                                
                </div> 

                <div id = "profile-containers">
                    <h2 id="centered">My posts:  </h2>                 
                    <YourPosts currentUser={this.props.currentUser} 
                               karmaUp = {this.props.karmaUp}
                               deleteClickHandler = {this.props.deleteClickHandler}
                               editFormSubmitHandler = {this.props.editFormSubmitHandler}
                               addCommentSubmitHandler = {this.props.addCommentSubmitHandler}                     
                               />                     
                </div>
            </div> 
        </div> 
        );
    }
}

export default Profile;
