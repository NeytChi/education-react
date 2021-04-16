import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {

        let message;

        if (this.state.isLoggedIn)
        {
            message = <div><div>Welcome, Traveler!</div></div>;
            return message;            
        }
        message = <div><div>Welcome, Dear Friend!</div></div>;
        return message;
    }
}

export default UserGreetings