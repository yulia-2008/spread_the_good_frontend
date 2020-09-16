import React, { Component } from 'react';
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Search from "../Components/Search";

class Header extends Component {
    render() {
        return (
            <div>
                <Login/>
                <Signup/>
                <Search/>
            </div>
        );
    }
}

export default Header;
