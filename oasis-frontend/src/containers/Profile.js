import React, { Component } from 'react';
import CityChooser from '../components/CityChooser';

const usersURL = 'http://localhost:3000/api/v1/users';

class Profile extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const resp = await fetch(usersURL);
        const users = await resp.json();
        // console.log(users);
    }


    editUser = async (event) => {
        console.log('event', event)
        // const resp = await fetch('http://localhost:3000/api/v1/users' + `/${}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(resp)
            
        // }) 
        this.setState({
        })
    }
  
 

    // deleteUser = (user) => {
    //     const id = user.id
    //     this.setState((prevState) => ({
    //         users: prevState.users.filter((user) => user.id !== id),
    //     }));
    //     fetch(`${usersURL}/${id}`, {method: 'DELETE'})
    // }



    render() {
        return (
            <div className="Profile">
            <h3> Edit Profile </h3>
                <form class="ui-form">
                    <label>Username</label>
                    < br/>
                    <input
                        onChange={event => this.editUser(event)}
                        value=""
                        type="text"
                        name="username"
                        v-validate="'required"
                    />
                    < br/>
                    <label>City</label>
                    < br/>
                    <CityChooser />
                    <br />
                    <input type="submit" value="Update Profile" />
                    {/* {this.state.isInvalid && <div className="text-danger mt-2" >Invalid Username and Password</div> } */}
                </form>
            </div>
        )
    }
}

export default Profile