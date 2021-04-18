import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        const { count, incrementCounter } = this.props
        return (
            <button onClick={incrementCounter}>Clicked {count} Times</button>
        )
    }
}

export default withCounter(ClickCounter)
