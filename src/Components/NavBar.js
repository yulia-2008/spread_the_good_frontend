import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ProfileImg from "../ProfileImg2.jpg";
import HomeImage from "../HomeImage.jpg";

class NavBar extends Component {
    render() {
        return (
            <div id="nav-div" > 
              
                <NavLink id="nav-bar" to='/' exact>
                  <img id="nav-button" src={HomeImage} alt="Home button" /> &nbsp;
                </NavLink>
                <NavLink id="nav-bar" to='/profile' exact > 
              <img id="nav-button" src={ProfileImg} alt="Profile button"/> 
                </NavLink>  
                
            </div>
        );
    }
}

export default NavBar;
 