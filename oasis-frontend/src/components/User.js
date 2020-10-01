import React, { Component } from 'React';

class User extends Component {

    getUser = (e) => {
        debugger
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div> User </div>
        )
    }
}

export default User