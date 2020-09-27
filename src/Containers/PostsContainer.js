import React, { Component } from 'react';
import Post from "../Components/Post"

class PostsContainer extends Component {

    state={
      //   posts: 
    }

    

    // filterPosts= () => { this.fetchPosts()
    //     let filteredPosts = this.state.posts.filter((post) => post.user.city === this.props.searchResult )
    //                      return filteredPosts.map(post => <Post key={post.id} postObj={post} 
    //                                               currentUser={this.props.currentUser}
    //                                               karmaScore={this.props.karmaScore}
    //                                               offerHelpClickHandler={this.props.offerHelpClickHandler}
    //                                              />) 
    //  }

    renderPosts = () => {  return this.props.posts.filter(p => p.active===true)
                    .map(post => <Post key={post.id} postObj={post} 
                                        currentUser={this.props.currentUser}
                                        addCommentSubmitHandler = {this.props.addCommentSubmitHandler}                                                     
                                            />)
        } 
//    editedPosts = () => {     
//       return this.props.posts.map(post => <Post key={post.id} postObj={post} 
//       currentUser={this.props.currentUser}                                                       
// />)

//    }  


   
    //   updatedPosts = () => { fetch(`http://localhost:4000/api/v1/posts`)
    //                       .then(response => response.json())
    //                       .then (resp =>  {  resp.map(post => <Post key={post.id} postObj={post} 
    //                         currentUser={this.props.currentUser}
                         
    //          />)
    //                       }) 
    // }    

   //  componentDidMount(){this.fetchPosts() 
   //     }       
   //    fetchPosts = () => { fetch(`http://localhost:4000/api/v1/posts`)
   //    .then(response => response.json())
   //    .then (resp =>  { this.setState({posts: resp}) 
   //    }) 
      
   //    }

       render() {
           console.log("post container", this.props.posts)
          return (
            <div id="posts-container">

                {this.renderPosts()} 
              
              </div> 
          );
      }
}
export default PostsContainer;    



        /* {this.props.searchResult=== "" ? 
                    
                   : this.props.newPost === "" ? this.filterPosts() : this.updatedPosts()
                }  */

       
            
            

// { this.props.searchResult=== "" ? 
//                   
     

    


