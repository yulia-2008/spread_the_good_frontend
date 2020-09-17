import React, { Component } from 'react';
import YouHelped from "./YouHelped";
import HelpedYou from "./HelpedYou";
import YourPosts from "./YourPosts";

class History extends Component {
    render() {
        return (
            <div id="app-containers">
                
                <YouHelped/>
                <HelpedYou/>
                <YourPosts/>
            </div>
        );
    }
}

export default History;
