import React from 'react';
import './App.css';
import Person from "./Person/Person"

function App() {
  return (
    <div className="App">
      <h1>Hi i'm in react</h1>
      <Person name="Jairo"  age="30"/>
      <Person name="Catita"  age="60"/>
      <Person name="Henry"  age="35"/>
    </div>
  );
}

export default App;
