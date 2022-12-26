// import React here, v17 so we can use ReactDOM
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add.jsx'


function App() {

  const [term, newTerm] = useState('')
  const [definition, newDef] = useState('')

  // handles our key term input and creates a state for it
  function handleTermChange (e) {
    // prevent a page refresh on entry
    e.preventDefault();
    // event target changes sets up our
    console.log(e.target.value)
    newTerm(e.target.value);
  }

  // handles our definition input and creates a state for it
  function handleDefinitionChange (e) {
    e.preventDefault();
    newDef(e.target.value);
  }

  // probably create an onClick function here
  function onClick () {
    // we want to create function that takes two states and makes a call to our database
    // 
  }

  return (
    <Add term={term} def={definition} termChange={handleTermChange} defChange={handleDefinitionChange} />
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
