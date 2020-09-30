import React, { Component } from 'react';

class SignUp extends Component {

    state = {}

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    // handleSignUp = async (e, userInfo) => {
    //     console.log('userInfo', userInfo)
    //     e.preventDefault()
    //     const resp = await fetch('http://localhost:3000/api/v1/users', {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(userInfo)
    //     })
    //     const user = resp.json();
    //     this.props.history.push('/rooftop_parks')
    // }

    handleSignUp = async (e, userInfo) => {
        console.log('user info', userInfo)
        e.preventDefault()
        const user = {
            username: userInfo.username,
            password: userInfo.password,
            city_id: userInfo.city_id,
        };
        console.log('user', user)
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
                // sessionStorage.setItem('Sign Up', json.username)
                
                // window.location.href = '/rooftop_parks';
            });
        } else {
            this.setState({
                isInvalid: true
            });
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
                    <select onChange={this.handleChange} name="city_id" id="city"> 
                        <option value="choose a city"> Choose a City </option>
                        <option value="9"> San Francisco </option>
                        <option value="10"> Seattle </option>  
                    </select>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SignUp