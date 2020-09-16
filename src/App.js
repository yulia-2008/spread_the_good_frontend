import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './Components/NavBar'
import Header from "./Containers/Header"
import Profile from "./Containers/Profile"
import FameWall from "./Components/FameWall"
import PostsContainer from "./Containers/PostsContainer"

class App extends React.Component {
  render(){

    return(<>
        <Router> 
             <NavBar/> 
                <Route exact path = '/profile' render = {() => 
                   <Profile />
                }/>
                <Route exact path = '/' render = { ()=>     
                   <div>
                     <Header/>                
                     <FameWall /> 
                     <PostsContainer/>     
                  </div> 
                }/> 
        </Router>
                </>   
    )
  }
}
export default App;
