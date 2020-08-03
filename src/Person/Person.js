import React from "react"
import Radium, {StyleRoot} from "radium";
import Person from "./Person.css"

//Presentation component - only show info
const person = (props) => {
    const style = {
        "@media (min-width: 500px)": {
            with: "450px"
        }
    }

    const rnd = Math.random()
    if(rnd>0.5 ){
        throw new Error("Something went wrong")
    }
    const {name, age, click, changed, children} = props
    return (<div className="Person" style={style}>
        <p onClick={click}>I'm a {name} and I am {age} years old</p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name}/>
    </div>)
}

export default Radium(person);