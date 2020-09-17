import React, { Component } from 'react';
import History from "../Components/History";

class Profile extends Component {
    render() {
        return (
            <div> 
                <h1>{this.props.currentUser.user.username}</h1>
               <img src={ this.props.currentUser} alt=""></img> 
               <p>Karma_score: {this.props.currentUser.user.karma_score}</p>
               <p>City: {this.props.currentUser.user.city}</p>
               <p>Bio: {this.props.currentUser.user.bio}</p>

                <History currentUser={this.props.currentUser}/>
            </div>
        );
    }
}

export default Profile;
