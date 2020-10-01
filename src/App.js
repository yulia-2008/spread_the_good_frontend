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
import ImageLogo from "./ImageLogo.jpg";

const token = localStorage.getItem("token")

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
    updatedKarma: false 
  }



clickHandler = (event) => {

  if (event.target.matches(`#logout-button`)) {
    localStorage.removeItem("token")
    this.setState({login: false,
                   signupClicked: false,
                   needHelpClicked: false,
                   currentUser: ""
                  })


}
        
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

editFormSubmitHandler = (state, postId) => {
  let updatePost = this.state.posts.find((post) => post.id === postId)
  updatePost.title = state.title
  updatePost.description = state.description
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
    //  .then(resp => { console.log("Patch", resp)})
    .then(setTimeout(this.fetchPosts, 2000))
    } 
 

componentDidMount(){this.fetchPosts() 

if (token) { fetch(`http://localhost:4000/api/v1/profile`, {
           method: "GET", 
           headers: {Authorization: `Bearer ${token}`},
            })
            .then(resp => resp.json())
            .then(resp => this.setState({currentUser: resp})
            )}  
             console.log(" app did moutn", this.state.posts)                          
  }


karmaUp = post => { 
  // console.log("Patch user ", helper)
  let updatedPosts = [...this.state.posts]
  let updateKarma = updatedPosts.filter((p) => p.user_id === post.helper_id)
  updateKarma.map((post) => post.user.karma_score++)
  this.setState({posts: updatedPosts, updatedKarma: true})
  // this.fetchPosts()

  // const token = localStorage.getItem("token")
  //   let optionsKarma = { method: 'PATCH',
  //                 headers: {
  //                'Content-Type': 'application/json',
  //                 Accept: 'application/json',
  //                 Authorization: `Bearer ${token}`                                         
  //                 },
  //                 body: JSON.stringify({                                                
  //                       karma_score: post.helper.karma_score + 1,                                                
  //                 })
  //               }      
  //    fetch(`http://localhost:4000/api/v1/users/${post.helper.id}`, optionsKarma)  
  //    .then(response => response.json())
}

// componentDidUpdate(prevState) {
//   if (this.state.updatedKarma !== prevState.updatedKarma) {this.fetchPosts()
//   }
//   console.log("did update", this.state.posts)
// }

fetchPosts = () => { fetch(`http://localhost:4000/api/v1/posts`)
.then(response => response.json())
.then (resp =>  { this.setState({posts: resp}) 
}) 
}
  
  render(){ 
      // console.log("all posts", this.state.currentUser)

    return(<> 
    
     {/* <div >  <img id="logo"src={ImageLogo} alt="logo"></img>  
     </div> */}
      

        <Router>  
             <NavBar /> 
                <Route exact path = '/profile' render = {() => 
                   this.state.currentUser.user ? <Profile currentUser={this.state.currentUser}
                                                          deleteClickHandler={this.deleteClickHandler}
                                                          editFormSubmitHandler={this.editFormSubmitHandler}
                                                          addCommentSubmitHandler = {this.addCommentSubmitHandler}
                                                          karmaUp={this.karmaUp}
                                                          updatedKarma = {this.state.updatedKarma}/>
                                               :  <h2 id="centered">Plesse login</h2>
                }/>
                <Route exact path = '/' render = { ()=> 
                <>   <br/> 
                   <div id="app-containers">
                     <Search searchHandler={this.searchHandler}/>
                     <ButtonContainer clickHandler = {this.clickHandler}
                                       currentUser = {this.state.currentUser}/>
                   </div>
                                     
                     <div id="app-containers">
                        {this.state.searchResult=== "" ? 
                             <PostsContainer                                
                                     currentUser = {this.state.currentUser}
                                     createConnection={this.createConnection}
                                     profile = {this.state.profile} 
                                     addCommentSubmitHandler = {this.addCommentSubmitHandler}                                                                                                                                       
                                     posts = {this.state.posts}
                                     
                                     />  
                             :<FilteredPosts currentUser = {this.state.currentUser}                                    
                                      addCommentSubmitHandler = {this.addCommentSubmitHandler}
                                      searchResult = {this.state.searchResult} 
                                      createConnection={this.createConnection}                                     
                                      addCommentSubmitHandler = {this.addCommentSubmitHandler}
                                      // clearSearch = {this.clearSearch}
                                      /> }
                       <FormContainer clicked = {this.state} 
                                    changeHandler={this.changeHandler}
                                    signUpHandler={this.signUpHandler}
                                    loginHandler={this.loginHandler}
                                    currentUser = {this.state.currentUser}
                                    postFormSubmitHandler = {this.postFormSubmitHandler}                                   
                                    />  
                                     
                      
                      {/* <FameWall />  */}
                                                              
                  </div> 
                  
                  </>
                }/> 
        </Router>
                </>   
    )
  }
  
}
export default App;
