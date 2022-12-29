import React from 'react'
import { useState } from 'react';

// this will generate a list of all our terms and definitions
function Table (props) {

  const [showForm, setShowForm] = useState(false);

  const show = () => {
    setShowForm(!showForm);
  }

    var tableValues = props.glossary.map( (currAddition) =>{
        return ([
          <tr>
            <td><button onClick={show}> Edit </button> </td>
            <td className='term'>{currAddition.term}</td>
            <td className='definition'>{currAddition.definition}</td>
          </tr>
        ])
      }
    );


  return ([
    // our pop up form here
    <div id='edit'>
      {showForm && (
        <form>
          <input className='term' placeholder='Edit Term'></input>
          <input className='def' placeholder='Edit Definition'></input>
          <button> Submit Change </button>
        </form>
      )}
    </div>,
    <table id='display'>
      <thead>
        <tr>
          <th colSpan='1000'>Glossary Table</th>
        </tr>
      </thead>
      <tbody>
        {tableValues}
      </tbody>
    </table>
  ])
}

export default Table;