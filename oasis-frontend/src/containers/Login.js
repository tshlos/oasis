import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    state = {
        user: {
            username: '',
            password: '',
        },
        allFavorites: [],
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleLogin = async (e, userInfo) => {
        console.log('userInfo', userInfo)
        e.preventDefault()
        const resp = await fetch('http://localhost:3000/api/v1/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const user = resp.json();
        if (!user.error) {
            this.setState({user: {id: user.id, username: user.username}, allFavorites: user.favorites}, () => {
                sessionStorage.setItem('Login', user.username);
                window.location.href = '/rooftop_parks';
            });
        } else {
            this.setState({
                isInvalid: true
            });
        }
     
        // this.props.history.push('/rooftop_parks')
    }

    // handleLogin = async (e, userInfo) => {
    //     e.preventDefault()
    //     const user = {
    //         username: userInfo.username,
    //         password: userInfo.password,
    //     };
    //     const resp = await fetch('http://localhost:3000/api/v1/login', {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     const json = await resp.json()
    //     if (!json.error) {
    //         this.setState({user: {id: json.id, username: json.username}, allFavorites: json.favorites}, () => {
    //             sessionStorage.setItem('Login', json.username)
                
    //             window.location.href = '/rooftop_parks';
    //         });
    //     } else {
    //         this.setState({
    //             isInvalid: true
    //         });
    //     }
    // }

    render() {
        return (
            <div className="Login">
                <form onSubmit={(e) => this.handleLogin(e, this.state)}>
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
                    <input type="submit" value="Login" />
                    {this.state.isInvalid && <div className="text-danger mt-2" >Invalid Username and Password</div> }
                </form>
            </div>
        );
    }
}

export default withRouter(Login);