import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './oasis.logo.png';


class NavBar extends Component {

    logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }
    
    render() {
        return (
            <div className="navbar">
                <NavLink to="/"> <img src= {logo} alt= 'oasis logo' className='logo'></img> </NavLink>
                {sessionStorage.getItem("Login") && <NavLink to="/rooftop_parks"> Rooftop Parks </NavLink> }
                {sessionStorage.getItem("Login") ? <a href="#" onClick={this.logout} > Logout </a> : <NavLink to="/login"> Login </NavLink> }
                {!sessionStorage.getItem("Login") && <NavLink to='/signup'> Sign Up </NavLink> }
                {sessionStorage.getItem("Login") && <NavLink to='/profile'> View Profile </NavLink> }
            </div>
        )
    }
}

export default NavBar
