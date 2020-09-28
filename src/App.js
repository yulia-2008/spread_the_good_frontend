import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Search from "./Components/Search";
import Profile from "./Containers/Profile";
import FameWall from "./Components/FameWall"
import PostsContainer from "./Containers/PostsContainer";
import FilteredPosts from "./Containers/FilteredPosts";
import ButtonContainer from "./Containers/ButtonContainer";
import FormContainer from "./Containers/FormContainer";

class App extends React.Component {

  state={
    loginClicked: false,
    signupClicked: false,
    needHelpClicked: false,  
    offerHelpClicked: false,
    name:"",
    email: "",
    city: "",
    password: "",
    photo: "",
    currentUser: "",
    karmaScore: "",
    searchResult: "",
    posts: [],
    // profile: false
    // newPost: false

    // searchResults: "",
   
  }



clickHandler = (event) => {
        
  if (event.target.matches(`#login-button`)) {
      this.setState({loginClicked: !this.state.loginClicked,
                     signupClicked: false,
                     needHelpClicked: false
                    })
  }
  
  if (event.target.matches(`#signup-button`)) {
      this.setState({signupClicked: !this.state.signupClicked,
                     loginClicked: false,
                     needHelpClicked: false
                    })
  }

  if (event.target.matches(`#create-post-button`)) {
      this.setState({needHelpClicked: !this.state.needHelpClicked,
                     loginClicked: false,
                     signupClicked: false     
                    })                  
  }
}

// offerHelpClickHandler = (user) => {
//        this.setState({offerHelpClicked: true,
//                       karmaScore: user.karma_score
//        })
// }


changeHandler = event => {this.setState({ [event.target.name]: event.target.value})
}

signUpHandler = event => {event.preventDefault()
    let options = { method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                    },
                    body: JSON.stringify({
                           user: { username: this.state.name,
                           password: this.state.password,
                           image: this.state.photo,
                           karma_score: 0,
                           city: this.state.city,
                           email: this.state.email, 
                           bio: ""
                          }
                    })
                   }
        fetch('http://localhost:4000/api/v1/users', options)
        .then(response => response.json())
        .then(resp => { resp.user ? this.setState({currentUser: resp, signupClicked: false, karmaScore: resp.user.karma_score })
                                  : this.setState({currentUser: resp})
                        localStorage.setItem("token", resp.jwt) 
         })
        event.target.reset()
}

loginHandler = event => {event.preventDefault() 
    let options = { method: 'POST',
                    headers: {
                   'Content-Type': 'application/json',
                    Accept: 'application/json'
                    },
                    body: JSON.stringify({
                          user:  {
                          username: this.state.name,
                          password: this.state.password
                          }
                    })
                  }      
     fetch('http://localhost:4000/api/v1/login', options)  // got toket in response !
     .then(response => response.json())
     .then(resp => { resp.user ? this.setState({currentUser: resp, loginClicked: false, karmaScore: resp.user.karma_score})
                               : this.setState({currentUser: resp})
          localStorage.setItem("token", resp.jwt) 
                           
     }) 
     event.target.reset()                   
} 

searchHandler = search =>{ this.setState({searchResult: search})
}

postFormSubmitHandler = resp => { this.fetchPosts()
this.setState({ needHelpClicked: false })

}

editFormSubmitHandler = () => {this.fetchPosts()
}

addCommentSubmitHandler = () => {this.fetchPosts()}

deleteClickHandler = postId => { 
   let updatedPosts = this.state.posts.filter((post) => post.id !== postId )
  this.setState({posts: updatedPosts}) 
  
}

createConnection = postId => {
    const token = localStorage.getItem("token")
    let options = { method: 'PATCH',
                    headers: {
                   'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`                                           
                    },
                    body: JSON.stringify({                                                
                          helper_id: this.state.currentUser.user.id, 
                          active: false                       
                    })
                  }      
     fetch(`http://localhost:4000/api/v1/posts/${postId}`, options)  
     .then(response => response.json()) 
      // .then(resp => { console.log("Patch", resp); this.fetchPosts()})
    .then(setTimeout(this.fetchPosts, 3000))
    } 
      


//  componentDidUpdate(){
// console.log("did update")
//  }

componentDidMount(){this.fetchPosts() 
const token = localStorage.getItem("token")
if (token) { fetch(`http://localhost:4000/api/v1/profile`, {
           method: "GET", 
           headers: {Authorization: `Bearer ${token}`},
            })
            .then(resp => resp.json())
             .then(resp => this.setState({currentUser: resp})  )
              
          }        
  }


karmaUp = helper => { 
  const token = localStorage.getItem("token")
  let options = { method: 'PATCH',
                headers: {
               'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
                                        
                },
                body: JSON.stringify({                                                
                      karma_score: helper.karma_score + 1, 
                                             
                })
              }      
 fetch(`http://localhost:4000/api/v1/users/${helper.id}`, options)  
 .then(response => response.json()) 
  .then( this.fetchPosts())
//  .then(resp => console.log("Patch", resp))
 
}


fetchPosts = () => { fetch(`http://localhost:4000/api/v1/posts`)
.then(response => response.json())
.then (resp =>  { this.setState({posts: resp}) 
}) 
}
  
  render(){ 
    //  console.log("all posts", this.state.posts)

    return(<> 
    <h1>SPREAD THE GOOD</h1> 
        <Router>  
             <NavBar /> 
                <Route exact path = '/profile' render = {() => 
                   this.state.currentUser.user ? <Profile currentUser={this.state.currentUser}
                                                          deleteClickHandler={this.deleteClickHandler}
                                                          editFormSubmitHandler={this.editFormSubmitHandler}
                                                          addCommentSubmitHandler = {this.addCommentSubmitHandler}
                                                          karmaUp={this.karmaUp}/>
                                               :  <h2>Plesse login</h2>
                }/>
                <Route exact path = '/' render = { ()=> 
                <>   <br/> 
                   <div id="app-containers">
                     <Search searchHandler={this.searchHandler}/>
                     <ButtonContainer clickHandler = {this.clickHandler}/>
                   </div>
                    
                  
                     <div id="app-containers">
                       {this.state.searchResult=== "" ?
                     <PostsContainer 
                                  //  offerHelpClickHandler={this.offerHelpClickHandler}
                                     currentUser = {this.state.currentUser}
                                     createConnection={this.createConnection}
                                     profile = {this.state.profile} 
                                     addCommentSubmitHandler = {this.addCommentSubmitHandler}
                                    //  newPost = {this.state.newPost}
                                    //  karmaScore={this.state.karmaScore}
                                    //  searchResult = {this.state.searchResult}
                                    //  newPost={this.state.newPost}
                                     posts = {this.state.posts}
                                     searchResult = {this.state.searchResult} 
                                     />  
                    


                     : <FilteredPosts currentUser = {this.state.currentUser}
                    
                                      // profile = {this.state.profile} 
                                      addCommentSubmitHandler = {this.addCommentSubmitHandler}
                                      searchResult = {this.state.searchResult} 
                                      createConnection={this.createConnection}
                                      addCommentSubmitHandler = {this.addCommentSubmitHandler}
                                      // clearSearch = {this.clearSearch}
                                      />
                }

                     <FormContainer clicked = {this.state} 
                                    changeHandler={this.changeHandler}
                                    signUpHandler={this.signUpHandler}
                                    loginHandler={this.loginHandler}
                                    currentUser = {this.state.currentUser}
                                    postFormSubmitHandler = {this.postFormSubmitHandler}                                   
                                    />                                           
                  </div> 
                  
                  </>
                }/> 
        </Router>
                </>   
    )
  }
  
}
export default App;
