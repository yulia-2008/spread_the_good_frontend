import React, { Component } from 'react';

class YourPosts extends Component {
    state={
        posts: []
    }

    myPosts = () => {  
        return this.state.posts.map((post) => <li> {post.title}</li> )             
    }

    

    render() {
        return (
            <div id="profile-history">
                All my postst.
               <ul>{this.myPosts()}</ul> 
            </div>
        );
    }
componentDidMount(){
    fetch(`http://localhost:4000/api/v1/users/${this.props.currentUser.user.id}`)
       .then(response => response.json())
       .then (resp =>  {this.setState({posts: resp.posts})
       })
    }
}

export default YourPosts;
