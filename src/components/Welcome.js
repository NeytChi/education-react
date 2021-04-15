import React, { Component } from 'react'

class Welcome extends Component
{
    render()
    {
        return <h1>Class Welcome, {this.props.HeroName}!</h1>
    }
}

export default Welcome