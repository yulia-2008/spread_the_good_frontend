import React, { Component } from 'react';
import Post from "../Components/Post"

class PostsContainer extends Component {

    state={
        posts:[]
    }

    

    // filterPosts= () => { this.fetchPosts()
    //     let filteredPosts = this.state.posts.filter((post) => post.user.city === this.props.searchResult )
    //                      return filteredPosts.map(post => <Post key={post.id} postObj={post} 
    //                                               currentUser={this.props.currentUser}
    //                                               karmaScore={this.props.karmaScore}
    //                                               offerHelpClickHandler={this.props.offerHelpClickHandler}
    //                                              />) 
    //  }

    renderPosts = () => {
       return this.props.posts.map(post => <Post key={post.id} postObj={post} 
                                                           currentUser={this.props.currentUser}
                                                        //    karmaScore={this.props.karmaScore}
                                                        //    offerHelpClickHandler={this.props.offerHelpClickHandler}
                                            />)
        }


    // = () => { this.fetchPosts()
    //   return this.state.posts.map(post => <Post key={post.id} postObj={post} 
    //                                             currentUser={this.props.currentUser}/>)
      
    //  //    karmaScore={this.props.karmaScore}
    //  //    offerHelpClickHandler={this.props.offerHelpClickHandler}
    //                                      />)
    // }

   
    //   updatedPosts = () => { fetch(`http://localhost:4000/api/v1/posts`)
    //                       .then(response => response.json())
    //                       .then (resp =>  {  resp.map(post => <Post key={post.id} postObj={post} 
    //                         currentUser={this.props.currentUser}
                         
    //          />)
    //                       }) 
    // }    

   

       render() {
          return (
            <div id="posts-container">
              
               {this.renderPosts()}
              
              </div> 
        /* {this.props.searchResult=== "" ? 
                     this.props.newPost === "" ? this.renderPosts() : this.updatedPosts()
                   : this.props.newPost === "" ? this.filterPosts() : this.updatedPosts()
                }  */

       
            
            

// { this.props.searchResult=== "" ? 
//                   
          );
      }

    

}



export default PostsContainer;
