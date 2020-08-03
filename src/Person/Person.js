import React from "react"
import Person from "./Person.css"

//Presentation component - only show info
const person = (props) => {
    const {name, age, click, changed, children} = props
    return (<div className="Person">
        <p onClick={click}>I'm a {name} and I am {age} years old</p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name}/>
    </div>)
}

export default person;