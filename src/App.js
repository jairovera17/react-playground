import React from 'react';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <h1>Hi i'm in react</h1>
    // </div>
    React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hi i'm in react"))
  );
}

export default App;
