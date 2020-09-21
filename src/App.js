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
  // this.getApiToken()
   

//   getApiToken = () => {
//       fetch("https://www.universal-tutorial.com/api/getaccesstoken", 
//          {method: 'GET',
//          headers: {'Content-Type': 'application/json',
//          Accept: 'application/json',
//         "api-token": "7uqo2M-ooS6imBevlwJ3lLlOYOznY4u-vv2vnIBOs6syU0LuKWL0IP7C5TLXFRc-iMI",
//          "user-email": "juliana.ny2008@gmail.com"
//           }
//          })
//    .then(resp => resp.json())
//    .then(resp => this.setState({tokenApi: resp}) )
//    .then(this.getSearchResults())
// }   

// getSearchResults = () => {
//   fetch("https://www.universal-tutorial.com/api/cities/New%20York", 
//      {method: 'GET',
//      headers: {'Content-Type': 'application/json',
//      Accept: 'application/json',
//      Authorization: `Bearer ${this.state.tokenApi.auth_token}`, 
//      }}
//      )
//   .then(resp => resp.json())
//   .then(resp =>  console.log("response", resp) )
//       }
     // https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city

   
     
  
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
                     <PostsContainer postsArray = {this.state.posts}/>   
                     <FameWall /> 
                     <FormContainer clicked = {this.state} changeHandler={this.changeHandler}
                                    signUpHandler={this.signUpHandler}
                                    loginHandler={this.loginHandler}
                                    currentUser = {this.state.currentUser}
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
    //  console.log("state", this.state)
     });
  }
}
export default App;
