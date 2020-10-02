import React, { Component } from 'react';
import CityChooser from '../components/CityChooser';

const usersURL = 'http://localhost:3000/api/v1/users';

class Profile extends Component {

    state = {
        users: [],
        user: {
            username: "",
            city_id: null
        }
    }

    async componentDidMount() {
        const resp = await fetch(usersURL);
        const users = await resp.json();
        this.setState({ users: users });
    }


    updateUser = async (event) => {
        event.preventDefault();
        const user = {
            username: event.target.username.value,
            city_id: event.target.city.value
        }
        let id = sessionStorage.getItem('Login')
        const resp = await fetch(`http://localhost:3000/api/v1/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        }) 
        this.setState({
            isUpdated: true,
            username: ''
        })
        window.location.href = '/rooftop_parks';
    }

    deleteUser = (event) => {
        event.preventDefault();
        const id = sessionStorage.getItem('Login')
        this.setState((prevState) => ({
            users: prevState.users.filter((user) => user.id !== id),
        }));
        fetch(`${usersURL}/${id}`, {method: 'DELETE'})
        this.setState({
            isDeleted: true,
            username: ''
        });
        window.location.href = '/logout';
        sessionStorage.clear();
    }

    render() { 
        return ( 
            <div id="profile" className="Profile">
            <h3> Edit Profile </h3>
                <form class="ui-form" onSubmit={(event) => this.updateUser(event)}>
                    {this.state.isUpdated && <div className="text-danger mt-2" >User has been updated</div> }
                    {this.state.isDeleted && <div className="text-danger mt-2" >User profile has been deleted</div> }
                    <label>Username</label>
                    < br/>
                    <input
                        value={this.state.username}
                        type="text"
                        name="username"
                        v-validate="required"
                    />
                    < br/>
                    <label>City</label>
                    < br/>
                    <CityChooser 
                        onChange={this.editUser}
                    />
                    <br />
                    <input 
                        type="submit" 
                        value="Update Profile" 
                    />
                    <br />
                    <input 
                        onClick = {(event) => this.deleteUser(event)}
                        type="submit" 
                        value="Delete Profile" 
                    />
                </form>
            </div>
        )
    }
}

export default Profile