import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './oasis.logo.png';

const usersURL = 'http://localhost:3000/api/v1/users'
class NavBar extends Component {
    state = {
        users: [],
        name: ""
    }
    
    logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    
    
    render() {
        // console.log(sessionStorage.Username)
       
        return (
            <div className="navbar">
                <NavLink to="/"> <img src= {logo} alt= 'oasis logo' className='logo'></img> </NavLink>
                {sessionStorage.getItem("Login") && <a href= "#" id="dont-click-me">  Welcome, {sessionStorage.Username}  </a> }
                {sessionStorage.getItem("Login") && <NavLink to="/rooftop_parks"> Rooftop Parks </NavLink> }
                {sessionStorage.getItem("Login") ? <a href="#" onClick={this.logout} > Logout </a> : <NavLink to="/login"> Login </NavLink> }
                {!sessionStorage.getItem("Login") && <NavLink to='/signup'> Sign Up </NavLink> }
                {sessionStorage.getItem("Login") && <NavLink to='/profile'> View Profile </NavLink> }
            </div>
        )
    }
}

export default NavBar
