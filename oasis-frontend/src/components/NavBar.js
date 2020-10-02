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
    async componentDidMount() {
        const resp = await fetch(usersURL);
        const users = await resp.json();
        this.setState({ users: users});
        
    }
    
    // getName = (users) => {
    //     console.log(sessionStorage.getItem("Login"))
    //     let id = sessionStorage.getItem("Login")
    //     let match = users.filter((user) => user.id == id)
    //     console.log(match[0].username)
    //     this.setState({name: match[0].username})
    
    
    render() {
        console.log(this.state.name)
       
        return (
            <div className="navbar">
                <NavLink to="/"> <img src= {logo} alt= 'oasis logo' className='logo'></img> </NavLink>
                {/* { <h1>Welcome </h1> } */}
                {sessionStorage.getItem("Login") && <NavLink to="/rooftop_parks"> Rooftop Parks </NavLink> }
                {sessionStorage.getItem("Login") ? <a href="#" onClick={this.logout} > Logout </a> : <NavLink to="/login"> Login </NavLink> }
                {!sessionStorage.getItem("Login") && <NavLink to='/signup'> Sign Up </NavLink> }
                {sessionStorage.getItem("Login") && <NavLink to='/profile'> View Profile </NavLink> }
            </div>
        )
    }
}

export default NavBar
