import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        if (this.state.isLoggedIn)
            return <div><div>Welcome, Traveler!</div></div>;
        return <div><div>Welcome, Dear Friend!</div></div>;
    }
}

export default UserGreetings