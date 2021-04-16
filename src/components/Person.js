import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>{person.id}) My name is {person.name}, I'm {person.age} age and a have a skill {person.skill}.</h2>
        </div>
    )
}

export default Person
