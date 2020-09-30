import React, { Component } from 'react';

class Profile extends Component {

    render() {
        return ( 
            <div className="Profile">
            <form >
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    debugger
                    // value={this.props.userInfo.username} 
                    // onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    // value={this.state.password} 
                    // onChange={this.handleChange} 
                />
                <br />
                <input type="submit" value="Login" />
                {/* {this.state.isInvalid && <div className="text-danger mt-2" >Invalid Username and Password</div> } */}
            </form>
        </div>
        )
    }
}

export default Profile