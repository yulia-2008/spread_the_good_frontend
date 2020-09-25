import React, { Component } from 'react';
// import History from "../Components/History";
import YourPosts from "../Components/YourPosts";


class Profile extends Component {
    state={
        post: ""
    }


    render() {
        return ( 
            
            <div >
              
                <h1>{this.props.currentUser.user.username}</h1>
                <img id="profile-avatar" src={ this.props.currentUser.user.image} alt=""></img> 
                <p>Karma_score: {this.props.karmaScore}</p>
                <p>City: {this.props.currentUser.user.city}</p>
                <p>Bio: {this.props.currentUser.user.bio} <button  onClick={this.bioClickHandler}>Fill out </button></p>
                <br/>
           

              
                <YourPosts currentUser={this.props.currentUser} 
                           deleteClickHandler = {this.props.deleteClickHandler}
                           editFormSubmitHandler = {this.props.editFormSubmitHandler}/>
                {/* <History currentUser={this.props.currentUser} clickHandler = {this.clickHandler}/> */}
            </div> 
        );
    }
}

export default Profile;
