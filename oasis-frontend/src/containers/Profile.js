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
        // users.map(user => console.log(user.id))
        // console.log(users);
        // this.editUser(users)
    }

    

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     let body = this.state.user
    //     let user  = this.state.users.filter(user => user.username === sessionStorage.Login)
    //     console.log(user[0].id)
    //         const resp = await fetch('http://localhost:3000/api/v1/users' + `/${user[0].id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(body)
    //     }) 
    // }

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
        // debugger
        // const id = user.id
        this.setState((prevState) => ({
            users: prevState.users.filter((user) => console.log('user', user)),
        }));
        fetch(`${usersURL}/${id}`, {method: 'DELETE'})
    }


    editUser = async ( event) => {
       const {name, value} = event.target 
        // debugger
    //    console.log(sessionStorage.Login)
        let body = {}
        this.setState(prevState =>({user: {...prevState.user, [name]: value}}))
    //    console.log(sessionStorage.Login) 
      
    //    let user_id = user.m
    //    console.log(user[0].id)
        // const resp = await fetch('http://localhost:3000/api/v1/users' + `/${user[0].id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({user})
            
        // }) 
        // console.log(user)
        }
    
  
 

    // deleteUser = (user) => {
    //     const id = user.id
    //     this.setState((prevState) => ({
    //         users: prevState.users.filter((user) => user.id !== id),
    //     }));
    //     fetch(`${usersURL}/${id}`, {method: 'DELETE'})
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
                        onChange={event => this.editUser(event)}
                        value={this.state.username}
                        type="text"
                        name="username"
                        v-validate="required"
                    />
                    < br/>
                    <label>City</label>
                    < br/>
                    <CityChooser 
                    onChange= {this.editUser}
                    
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