import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink className = "nav-link" to='/' exact>
                    <span id='logo-div'>
                       App
                    </span>
                </NavLink>
                <NavLink className = "nav-link" to='/profile' exact > 
                   Profile    
                </NavLink> 
                
            </div>
        );
    }
}

export default NavBar;
