import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div id="nav-div" > 
              
                <NavLink id="nav-bar" to='/' exact>
                    <span id = "nav-link">Home &nbsp; </span>
                </NavLink>
                <NavLink id="nav-bar" to='/profile' exact > 
                  <span id = "nav-link">Profile   </span>  
                </NavLink>  
                
            </div>
        );
    }
}

export default NavBar;
