import React, { Component } from 'react'

class ClassClick extends Component
{   
    render() {
        function clickHandler()
        {
            console.log("Clicked!");
        }
        return (
            <div>
                <button onClick={clickHandler}>Click</button>
            </div>
        )
    }
}


export default ClassClick
