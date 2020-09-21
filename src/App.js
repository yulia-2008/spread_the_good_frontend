import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './Components/NavBar'
import Search from "./Components/Search";
import Profile from "./Containers/Profile"
import FameWall from "./Components/FameWall"
import PostsContainer from "./Containers/PostsContainer"
import ButtonContainer from "./Containers/ButtonContainer"
import FormContainer from "./Containers/FormContainer"

class App extends React.Component {

  state={
    posts: [],
    loginClicked: false,
    signupClicked: false,
    needHelpClicked: false,
   
    name:"",
    email: "",
    city: "",
    password: "",
    photo: "",
    currentUser: "",
    // searchResults: "",
    // tokenApi: ""
  }



clickHandler = (e) => {
        
  if (e.target.matches(`#login-button`)) {
      this.setState({loginClicked: !this.state.loginClicked,
                     signupClicked: false,
                     needHelpClicked: false
                    })
  }
  
  if (e.target.matches(`#signup-button`)) {
      this.setState({signupClicked: !this.state.signupClicked,
                     loginClicked: false,
                     needHelpClicked: false
                    })
  }

  if (e.target.matches(`#create-post-button`)) {
      this.setState({needHelpClicked: !this.state.needHelpClicked,
                     loginClicked: false,
                     signupClicked: false     
                    })                  
  }

  // if (e.target.matches(`#offer-your-help-button`)) {
  //     this.setState({offerHelpClicked: true})
  //     this.createConnection()
  // }
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
        .then(resp => { resp.user ? this.setState({currentUser: resp, signupClicked: false})
                                  : this.setState({currentUser: resp})
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
     .then(resp => { resp.user ? this.setState({currentUser: resp, loginClicked: false})
                               : this.setState({currentUser: resp})
     }) 
     event.target.reset()                   
} 

searchHandler = search =>{ 
  // on Search submit render posts
  
}

postFormSubmitHandler = resp => {
   this.setState({posts: [...this.state.posts, resp]
   })
}


  
  render(){

    return(<>
        <Router>  
             <NavBar /> 
                <Route exact path = '/profile' render = {() => 
                   this.state.currentUser.user ? <Profile currentUser={this.state.currentUser}/> : null 
                }/>
                <Route exact path = '/' render = { ()=> 
                <>    
                   <div id="app-containers">
                     <Search searchHandler={this.searchHandler}/>
                     <ButtonContainer clickHandler = {this.clickHandler}/>
                   </div>
                    
                  
                     <div id="app-containers">
                     <PostsContainer postsArray = {this.state.posts}
                                     currentUser = {this.state.currentUser}/>   
                     <FameWall /> 
                     <FormContainer clicked = {this.state} changeHandler={this.changeHandler}
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

  componentDidMount(){
     fetch(`http://localhost:4000/api/v1/posts`)
     .then(response => response.json())
     .then (resp =>  {this.setState({posts: resp}) 
     });
  }
}
export default App;
