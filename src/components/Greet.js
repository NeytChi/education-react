import React from 'react'

// function Greet() {
//     return <h1>Hello World!</h1>
// }

export const Greet = (props) =>
{
    console.info(props);
    return <h1>Hello World, {props.Name}!</h1>;
}



// export default Greet