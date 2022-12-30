import React from 'react'
import { useState } from 'react';

// this will generate a list of all our terms and definitions
function Table (props) {

    var tableValues = props.glossary.map( (currAddition) =>{
        return ([
          <tr>
            <td><button type='button' value={currAddition._id} onClick={props.show}> Edit </button> </td>
            <td><button type='button' value={currAddition._id} onClick={props.delete}> Delete </button></td>
            <td  className='term'>{currAddition.term}</td>
            <td  className='definition'>{currAddition.definition}</td>
          </tr>
        ])
      }
    );


  return ([
    // our pop up form here
    <div id='edit'>
      {props.showForm && (
        <form>
          <input value={props.term} className='term' placeholder='Edit Term' onChange={props.termChange}></input>
          <input value={props.def} className='def' placeholder='Edit Definition' onChange={props.defChange}></input>
          <button type='button' onClick={props.edit}> Submit Change </button>
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