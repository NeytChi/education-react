import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        return (
            this.state.isLoggedIn ? 
            <div>Welcome, Traveler!</div> : 
            <div>Welcome, Dear Friend!</div>
        );
    }
}

export default UserGreetings