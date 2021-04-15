import React from 'react'

// function Greet() {
//     return <h1>Hello World!</h1>
// }

const Greet = props => {
    const {Name} = props
    {
        return <h1>Hello World, {Name}!</h1>;
    }
}



export default Greet