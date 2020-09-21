import React, { Component } from 'react';

class YouHelped extends Component {

state={
    help_seekers: []
}

helpSeekers = () => {  
    return this.state.help_seekers.map((person) => <li> {person.username}</li> )             
}


    render() {
        return (console.log(this.state.help_seekers),
            <div id="profile-history">
                Users who you helped.
                <ul>{this.helpSeekers()}</ul>
            </div>
        );
    }
    componentDidMount(){
        fetch(`http://localhost:4000/api/v1/users/${this.props.currentUser.user.id}`)
        .then(response => response.json())
        .then (resp =>  {this.setState({help_seekers: resp.help_seekers}) 
        });
     }
}

export default YouHelped;
