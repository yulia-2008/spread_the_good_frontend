import React, { Component } from 'react';
import YouHelped from "./YouHelped";
import HelpedYou from "./HelpedYou";
import YourPosts from "./YourPosts";

class History extends Component {
    
   
    render() {
        return (
            <div id="app-containers">
                
                <YouHelped currentUser={this.props.currentUser}/>
                <HelpedYou currentUser={this.props.currentUser}/>
                <YourPosts currentUser={this.props.currentUser} />
            </div>
        );
    }
}

export default History;
