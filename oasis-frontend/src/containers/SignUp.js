import React, { Component } from 'react';
import CityChooser from '../components/CityChooser';

class SignUp extends Component {

    state = {}

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    async componentDidMount() {
        const resp = await fetch('http://localhost:3000/api/v1/cities');
        const cities = await resp.json();
        this.setState({
            cities
        })   
    }


    handleSignUp = async (e, userInfo) => {
        e.preventDefault()
        const user = {
            username: userInfo.username,
            password: userInfo.password,
            city_id: userInfo.city_id,
        };
        const resp = await fetch('http://localhost:3000/api/v1/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
        const json = await resp.json()
        if (!json.error) {
            this.setState({user: {id: json.id, username: json.username}, allFavorites: json.favorites}, () => {
                sessionStorage.setItem('Login', json.id);
                sessionStorage.setItem('Username', json.username);
                window.location.href = '/rooftop_parks';
            });
        } else {
            this.setState({
                isInvalid: true
            })
        }
    }

    render() {
        return (
            <div className="Signup">
                <form onSubmit={(e) => this.handleSignUp(e, this.state)}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                    />
                    <br />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                    />
                    <br />
                    <CityChooser onChange={this.handleChange} />
                    <br />
                    <input className="login-signup-buttons" type="submit" value="Submit" />
                    {this.state.isInvalid && <div className="text-danger mt-2" >Username has already been taken</div>}
                </form>
            </div>
        );
    }
}

export default SignUp