import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium";
import Person from "./Person/Person"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

//container because has state
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {id: "123", name: "Fulanito", age: 20},
                {id: "234", name: "Roberto", age: 23},
                {id: "345", name: "Luis", age: 26}
            ],
            showPersons: false
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps", props, state);
        return state;
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {...this.state.persons[personIndex]}

        person.name = event.target.value
        const persons = [...this.state.persons]
        persons[personIndex] = person
        this.setState({persons: persons})
    }

    delelePerson = (index) => {
        const persons = this.state.persons.slice();
        persons.splice(index, 1);
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }

    render() {
        const style = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
            ":hover": {
                backgroundColor: "lightgreen",
                color: "black"
            }
        }
        let persons = [];
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                key={person.name}
                                click={() => this.delelePerson(index)}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                                name={person.name}
                                age={person.age}/>
                        })
                    }
                </div>
            )
            style.backgroundColor = "red";
        } else {
            persons = (<div>
                <h3>Press the button to show persons</h3>
            </div>)
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi i'm in react</h1>
                    <p>This is really working</p>
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Botón
                    </button>
                    {persons}
                </div>
            </StyleRoot>
        )
    }
}

export default Radium(App)
