import React, { Component } from 'react'

class Counter extends Component
{
    constructor() {
        super()
        this.state = {
            counter : 0
        }
    }
    count() {
        this.setState ((prevState, props) => ({
            counter : prevState.counter + 1
        }),
        () => {
            console.log('Callback value', this.state.counter)
        })
        console.log('Callback value', this.state.counter);
    }
    render()
    {
        return (
        <div>
            <h1>Counter = '{this.state.counter}'</h1>
            <button onClick={() => this.count()} >Up!</button>
        </div>
        )
    }
}

export default Counter