import React, { Component } from 'react';

class HelpedYou extends Component {
    state={
        connections: []
    }

    acceptHelpClickHandle = () => {
        // 1. archive the postMessage
        // 2. star to helper


    }
    
    // helpers = () => {  
    //     return this.state.connections.filter((conn) => conn.he
        
        
    //     <p> {person.username} would like to help you 
    //                                                   <button  onClick={ () => this.acceptHelpClickHandler()}>Accept Help</button>  
    //                                              </p> )             
    // }
    
    render() {
        return (
            <div id="profile-history">                
                <>{this.helpers()}</>
            </div>
        );
    }
    componentDidMount(){
        fetch(`http://localhost:4000/api/v1/connections`)
        .then(response => response.json())
        .then (resp =>  {this.setState({connectiona: resp}) 
        });
     }
}

export default HelpedYou;
