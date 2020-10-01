import React, { Component } from 'react';
import CityChooser from '../components/CityChooser';

class Profile extends Component {

    render() {
        return (
            <div className="Profile">
            <h3> Edit Profile </h3>
                <form class="ui-form">
                    <label>Username</label>
                    < br/>
                    <input
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