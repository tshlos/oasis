import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './oasis.logo.png';


class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <NavLink to="/"> <img src= {logo} alt= 'oasis logo' className='logo'></img> </NavLink>
                <NavLink to="/rooftop_parks"> Rooftop Parks</NavLink>
                <NavLink to="/"> logout</NavLink>

            </div>
        )
    }
}



export default NavBar
