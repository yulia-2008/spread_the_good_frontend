import React, { Component } from 'react';
import Post from "../Components/Post"

class PostsContainer extends Component {

    state={
        posts: []
    }

    

    filterPosts= () => { let filteredPosts = this.state.posts.filter((post) => post.user.city === this.props.searchResult )
                         return filteredPosts.map(post => <Post key={post.id} postObj={post} 
                                                  currentUser={this.props.currentUser}
                                                  karmaScore={this.props.karmaScore}
                                                  offerHelpClickHandler={this.props.offerHelpClickHandler}
                                                 />) 
     }

    renderPosts = () => this.state.posts.map(post => <Post key={post.id} postObj={post} 
                                                           currentUser={this.props.currentUser}
                                                           karmaScore={this.props.karmaScore}
                                                           offerHelpClickHandler={this.props.offerHelpClickHandler}
                                            />)


    render() {
        return (
            <div id="posts-container">
            
                  {this.props.searchResult === "" ? this.renderPosts() : this.filterPosts()  } 
            </div>
        );
    }
    componentDidMount(){      
        fetch(`http://localhost:4000/api/v1/posts`)
        .then(response => response.json())
        .then (resp =>  {this.setState({posts: resp}) 
        }) 
     }  
}

export default PostsContainer;
