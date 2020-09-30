import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

    logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    render() {
        return (
            <div className="navbar">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/rooftop_parks"> Rooftop Parks </NavLink>
                {sessionStorage.getItem("Login") ? <a href="#" onClick={this.logout} > Logout </a> : <NavLink to="/login"> Login </NavLink> }
                <NavLink to='/signup'> Sign Up </NavLink>
            </div>
        )
    }
}



export default NavBar
