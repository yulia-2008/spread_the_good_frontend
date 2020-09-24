import React, { Component } from 'react';

class HelpedYou extends Component {
    state={
        helpers: []
    }
    
    helpers = () => {  
        return this.state.helpers.map((person) => <p> {person.username} would like to help you 
                                                      <button  onClick={ () => this.acceptHelpClickHandler()}>Accept Help</button>  
                                                 </p> )             
    }
    
    render() {
        return (
            <div id="profile-history">                
                <>{this.helpers()}</>
            </div>
        );
    }
    componentDidMount(){
        fetch(`http://localhost:4000/api/v1/users/${this.props.currentUser.user.id}`)
        .then(response => response.json())
        .then (resp =>  {this.setState({helpers: resp.helpers}) 
        });
     }
}

export default HelpedYou;
