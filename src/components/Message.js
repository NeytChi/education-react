import React, { Component } from 'react'

class Message extends Component
{
    constructor() {
        super()
        this.state = {
            message : "Hi u hi!"
        }
    }
    changeMessage() {
        this.setState ({
            message : "How are you?"
        })
    }
    render()
    {
        return (
        <div>
            <h1>State is = '{this.state.message}'</h1>
            <button onClick={() => this.changeMessage()} >Subscribe!</button>
        </div>
        )
        
    }
}

export default Message