// import React here, v17 so we can use ReactDOM
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add.jsx'
import Table from './components/Table.jsx'

function App() {

  const [term, newTerm] = useState('')
  const [definition, newDef] = useState('')
  const [searchTerm, newSearch] = useState('');
  const [glossary, updateGloss] = useState([])
  const [pendingChangeID, newPendingChangeID] = useState('')
  const [showForm, setShowForm] = useState(false);
  const [showAddForm, setAddForm] = useState(true);

  // component did mount
  // make a post request immediately to server
  useEffect( () => {
    fetch('http://localhost:3000', {method: 'POST', headers: {'Content-Type': 'application/json'}})
      .then ( (response) => {
        response.json()
          .then( (result) => {
            if (!searchTerm) {
            updateGloss(result);
          }
          })
      })
    }
  )

  const show = (e) => {
    e.preventDefault();
    // e.target.value gives us an array of the key term / def we currently are using
    newPendingChangeID(e.target.value);
    // update the state of our termstochange so we can use it in the onEdit function
    setShowForm(true);
    setAddForm(false);

  }

  function searchInput (e) {
    e.preventDefault();
    newSearch(e.target.value)
  }

  function searchRecord (e) {
    e.preventDefault();
    fetch('http://localhost:3000/search', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({term: searchTerm})})
      .then ( (response) => {
        response.json()
          .then( (result) => {
            console.log('what is this', result);
            updateGloss(result);
            console.log('should be one record', glossary)
          })
      })
  }

  function deleteRecord (e) {
    e.preventDefault()

    var id = e.target.value;

    var data = {
      id: id
    }

    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3000/delete', options)
      .then ( (result) => {
        result.json()
          .then ( (result) => {
            updateGloss(result);
          })
      })
  }

  // handles our edit function
  function submitChange (e) {
    e.preventDefault()

    // we should make a request to our server to then access our database
    var data = {
      id: pendingChangeID,
      newTerm: term,
      newDef: definition
    }

    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    // call to server
    fetch('http://localhost:3000/change', options)
      .then ( (response) => {
        response.json()
          .then ( (result) => {
            setShowForm(false)
            setAddForm(true);
            newTerm('')
            newDef('');
          })
      })

    if (!term && !definition) {
      setShowForm(false)
      setAddForm(true)
    }

  }

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
    <Add searchTerm={searchTerm} term={term} def={definition} termChange={handleTermChange} defChange={handleDefinitionChange} click={onClick} show={showAddForm} searchInput={searchInput} search={searchRecord}/>,
    <Table term={term} def={definition}show={show} showForm={showForm} glossary={glossary} edit={submitChange} termChange={handleTermChange} defChange={handleDefinitionChange} delete={deleteRecord}/>
  ])
}

ReactDOM.render(<App />, document.getElementById("root"))
