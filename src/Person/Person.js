import React from "react"

//Presentation component - only show info
const person = (props) => {
    const {name, age, click, changed, children} = props
    return (<div>
        <p onClick={click}>I'm a {name} and I am {age} years old</p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name}/>
    </div>)
}

export default person;