import React, { Component } from 'react';

// comment component for future 

class Comment extends Component {

    state={
        comments: []
    }

    comments = () => {     
       return this.state.comments.map((comm) => <li key={comm.id}> {comm.text}</li> )             
    }
       
    render() { 
        return (
            <ul>{this.comments()}</ul>
        );
    
    }
   
           
   componentDidMount() { 
       fetch(`http://localhost:4000/api/v1/posts/${this.props.post.id}`)
       .then(response => response.json())
       .then (resp =>  {this.setState({comments: resp.comments}) 
       })
    } 
}

// export default Comment;
