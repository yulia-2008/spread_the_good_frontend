import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ProfileImg from "../ProfileImg2.jpg";
import HomeImage from "../HomeImage.jpg";
import ImageLogo from "../ImageLogo.jpg";

class NavBar extends Component {
    render() {
        return (
             
            <div id="app-containers" > 
             <img id="logo"src={ImageLogo} alt="logo"></img> &nbsp; &nbsp;
     
                <NavLink id="nav-bar" to='/' exact>
                   <img id="nav-button" src={HomeImage} alt="Home button" /> &nbsp; &nbsp;
                </NavLink>

                <NavLink id="nav-bar" to='/profile' exact > 
                   <img id="nav-button" src={ProfileImg} alt="Profile button"/> 
                </NavLink>                  
            </div> 
        );
    }
}

export default NavBar;
 