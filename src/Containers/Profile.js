import React, { Component } from 'react';
import History from "../Components/History";

class Profile extends Component {
    render() {
        return ( 
            <div> 
                <h1>{this.props.currentUser.user.username}</h1>
               <img id="profile-avatar" src={ this.props.currentUser.user.image} alt=""></img> 
               <p>Karma_score: {this.props.karmaScore}</p>
               <p>City: {this.props.currentUser.user.city}</p>
               <p>Bio: {this.props.currentUser.user.bio} <button  onClick={this.clickHandler}>Fill out </button></p>
                 <br/>
                <History currentUser={this.props.currentUser}/>
            </div>
        );
    }
}

export default Profile;
