import React from "react"

const person = (props) => {
    const { name, age } = props
    return <p>I'm a {name} and I am {age} years old</p>
}

export default person;