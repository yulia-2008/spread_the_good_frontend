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
}

    render() {
        return ( 
            // console.log(this.props.posts),
            
            <div >
             
                <h1>{this.props.currentUser.user.username} ({this.props.currentUser.user.karma_score})</h1>
                <img id="profile-avatar" src={ this.props.currentUser.user.image} alt=""></img> 
                <p>Karma_score: {this.props.karmaScore}</p>
                <p>City: {this.props.currentUser.user.city}</p>
                <p>Bio: {this.props.currentUser.user.bio} <button  onClick={this.bioClickHandler}>Fill out </button></p>
                <br/> 
                <div id="app-containers">
                    <div id="profile-containers">   
                     I'm going to help:      
                <PostsYouHelped  currentUser = {this.props.currentUser}
                                    //  profile = {this.state.profile}                                   
                                     posts = {this.state.helpedPosts}/>                                
                    </div> 

                    <div id = "profile-containers">
                    <YourPosts currentUser={this.props.currentUser} 
                           deleteClickHandler = {this.props.deleteClickHandler}
                           editFormSubmitHandler = {this.props.editFormSubmitHandler}
                        //    profile = {this.state.profile}
                           />
                    </div>
                </div> 
            </div> 
        );
    }
}

export default Profile;
