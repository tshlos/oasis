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
        console.log(cities[0].id)
        console.log(cities[1].id)
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
                sessionStorage.setItem('Login', json.username)
                
                window.location.href = '/rooftop_parks';
            });
        } else {
            this.setState({
                isInvalid: true
            })
        }
        // .catch(err => console.log(err))
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SignUp