import React, { Component } from 'react';

class Comment extends Component {

    state={
        comments: []
    }

    comments = () => {     
        this.state.comments.map(comm => <li> {comm.text} </li>);  
        console.log("comm", this.state.comments)    
    }
       
    render() {
        return (
            <ul>
               {this.comments()}         
            </ul>
        );
    
    }
   
           
   componentDidMount() { 
       fetch(`http://localhost:4000/api/v1/posts/${this.props.post.id}`)
       .then(response => response.json())
       .then (resp =>  {this.setState({comments: resp.comments}) 
       })
    } 
}

export default Comment;
