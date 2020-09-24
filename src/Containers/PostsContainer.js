import React, { Component } from 'react';
import Post from "../Components/Post"

class PostsContainer extends Component {

    state={
        posts: [],
        newPost: this.props.newPost     
    }

    

    filterPosts= () => { this.fetchPosts()
        let filteredPosts = this.state.posts.filter((post) => post.user.city === this.props.searchResult )
                         return filteredPosts.map(post => <Post key={post.id} postObj={post} 
                                                  currentUser={this.props.currentUser}
                                                  karmaScore={this.props.karmaScore}
                                                  offerHelpClickHandler={this.props.offerHelpClickHandler}
                                                 />) 
     }

    renderPosts = () => {this.fetchPosts()
        this.state.posts.map(post => <Post key={post.id} postObj={post} 
                                                           currentUser={this.props.currentUser}
                                                        //    karmaScore={this.props.karmaScore}
                                                        //    offerHelpClickHandler={this.props.offerHelpClickHandler}
                                            />)
        }

    updatedPosts= () => { this.fetchPosts()
    }

   
      fetchPosts = () => {fetch(`http://localhost:4000/api/v1/posts`)
                          .then(response => response.json())
                          .then (resp =>  { this.setState({posts: resp}) 
                          }) 
    }   

       render() {console.log("render", this.state.posts)
          return (
            <div id="posts-container">
        
              {this.props.searchResult=== "" ? this.renderPosts() : this.filterPosts()
                //    this.props.newPost === "" ?  : this.updatedPosts()
                //   : this.props.newPost === "" ?  : this.updatedPosts()
               } 
            </div>

// { this.props.searchResult=== "" ? 
//                    this.props.newPost === "" ? this.renderPosts() : this.updatedPosts()
//                   : this.props.newPost === "" ? this.filterPosts() : this.updatedPosts()
//                } 

          );
      }

    

}



export default PostsContainer;
