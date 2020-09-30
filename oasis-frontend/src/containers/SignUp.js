import React, { Component } from 'react';

class SignUp extends Component {

    state = {}

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSignUp = async (e, userInfo) => {
        console.log('userInfo', userInfo)
        e.preventDefault()
        const resp = await fetch('http://localhost:3000/api/v1/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const user = resp.json();
        this.props.history.push('/rooftop_parks')
    }

    render() {
        return (
            <div className="Login">
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
                        name="password_digest" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                    />
                    <br />
                    <select onChange={this.handleChange} name="city_id" id="city"> 
                        <option value="choose a city"> Choose a City </option>
                        <option value="3"> San Francisco </option>
                        <option value="4"> Seattle </option>  
                    </select>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SignUp