import React, { Component } from 'react';

class HelpedYou extends Component {
    state={
        helpers: []
    }
    
    helpers = () => {  
        return this.state.helpers.map((person) => <li> {person.username}, {person.email}</li> )             
    }
    
    render() {
        return (
            <div id="profile-history">
                Users who wish to help you.
                <ul>{this.helpers()}</ul>
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
