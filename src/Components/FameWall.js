import React, { Component } from 'react';

class FameWall extends Component {
 
   state={
      users:[]
   }

  user = () => { let max = 0;
                 let bestHelper= "";
                 this.state.users.map(user => {
                       if (user.karma_score > max) { max = user.karma_score; bestHelper=user}               
                }); 
        return bestHelper
  }


    render() {
        return (
            <div id="fame-wall-container">
               <h3>Fame Wall </h3>  
              
                 <p> {this.user().username} ({this.user().karma_score})</p>
                 <p>  {this.user().city}</p>              
             
               {/* { this.props.currentUser.user && this.props.currentUser.user.id === this.user().id ? 
                         this.props.karmaScore : this.user().karma_score }               */}
                <img id="fame-wall-photo" src={this.user().image} alt=""></img> 

            </div> 
        )
    }

    componentDidMount(){
        fetch(`http://localhost:4000/api/v1/users`)
        .then(response => response.json())
        .then (resp =>  {this.setState({users: resp}) 
        });
     }  
}

export default FameWall;
