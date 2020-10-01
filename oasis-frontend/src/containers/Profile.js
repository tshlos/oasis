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


    handleSubmit = async (event) => {
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
    }

    deleteUser = () => {
        const id = sessionStorage.getItem('Login')
        this.setState((prevState) => ({
            users: prevState.users.filter((user) => user.id !== id),
        }));
        fetch(`${usersURL}/${id}`, {method: 'DELETE'})
    }

  
 

    // deleteUser = (user) => {
    //     const id = user.id
    //     this.setState((prevState) => ({
    //         users: prevState.users.filter((user) => user.id !== id),
    //     }));
    //     fetch(`${usersURL}/${id}`, {method: 'DELETE'})
    // }

    
    // deleteProfile = () =>{
    //     let user  = this.state.users.filter(user => user.username === sessionStorage.Login)
    //     console.log(user[0].id)

    //     fetch(`http://localhost:3000/api/v1/users/${user[0].id}`, {
    //         method: "DELETE",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }
//     deleteProfile = () =>{
//         let user  = this.state.users.filter(user => user.username === sessionStorage.Login)
//         console.log(user[0].id)

//         fetch(`http://localhost:3000/api/v1/users/${user[0].id}`, {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//     }




    render() {
        
        return (
            <div className="Profile">
            <h3> Edit Profile </h3>
                <form class="ui-form" onSubmit = {(event) =>this.handleSubmit(event)}>
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
                    value="Update Profile" />
                    <br />
                    <input 
                    onClick = {this.deleteUser}
                    type="submit" 
                    value="Delete Profile" />
                </form>
                <h7>
                    <button onClick={this.deleteProfile}> Delete Profile</button>
                </h7>
            </div>
        )
    }
}

export default Profile