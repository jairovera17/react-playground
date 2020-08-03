import React from "react"

const person = (props) => {
    const { name, age, children } = props
    return (<div>
        <p>I'm a {name} and I am {age} years old</p>
        <p>{children}</p>
    </div>)
}

export default person;