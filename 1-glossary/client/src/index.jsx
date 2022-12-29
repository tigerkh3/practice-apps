// import React here, v17 so we can use ReactDOM
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add.jsx'
import Table from './components/Table.jsx'

function App() {

  const [term, newTerm] = useState('')
  const [definition, newDef] = useState('')
  const [glossary, updateGloss] = useState([])

  // component did mount
  // make a post request immediately to server
  useEffect( () => {
    fetch('http://localhost:3000', {method: 'POST', headers: {'Content-Type': 'application/json'}})
      .then ( (response) => {
        response.json()
          .then( (result) => {
            console.log(result);
            updateGloss(result);
          })
      })
    }
  )

  // handles our key term input and creates a state for it
  function handleTermChange (e) {
    // prevent a page refresh on entry
    e.preventDefault();
    // event target changes sets up our
    newTerm(e.target.value);
  }

  // handles our definition input and creates a state for it
  function handleDefinitionChange (e) {
    e.preventDefault();
    newDef(e.target.value);
  }

  // probably create an onClick function here
  function onClick (e) {
    e.preventDefault();
    // we want to create function that takes two states and makes a call to our database
    // we can make a post request here to our server
    // can use fetch to get it going
    var data = {
      term: term,
      def: definition,
    }
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3000', options)
      .then ( (response) => {
        response.json()
          .then( (result) => {
            // result here (working already) is an array of our terms/definitions
            updateGloss(result);
          })
      })
  }

  return ([
    <Add term={term} def={definition} termChange={handleTermChange} defChange={handleDefinitionChange} click={onClick}/>,
    <Table glossary={glossary}/>
  ])
}

ReactDOM.render(<App />, document.getElementById("root"))
