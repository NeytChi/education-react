import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [ 
        {
            id : 1,
            name : 'Name',
            age: 20,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Name',
            age: 25,
            skill : 'C#'
        },
        {
            id : 3,
            name : 'Name',
            age: 30,
            skill : 'Java'
        },
        {
            id : 4,
            name : 'Name',
            age: 35,
            skill : 'Ruby'
        }]
    const personList = persons.map((person, index) => <Person person={person} index={index}/>)
    return <div>{personList}</div>
}

export default NameList
