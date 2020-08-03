import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: "Fulanito", age: 20 },
      { name: "Roberto", age: 23 },
      { name: "Luis", age: 26 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Lunita", age: 20 },
        { name: "José", age: 23 },
        { name: "Lenovo", age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i'm in react</h1>
        <button onClick={this.switchNameHandler}>Botón</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbie is cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  />
      </div>
    )
  }
}
export default App
