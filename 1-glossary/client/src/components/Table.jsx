import React from 'react'

// this will generate a list of all our terms and definitions
function Table (props) {

    var tableValues = props.glossary.map( (currAddition) =>{
        return ([
          <tr>
            <td><button> Edit </button> </td>
            <td>{currAddition.term}</td>
            <td>{currAddition.definition}</td>
          </tr>
        ])
      }
    );


  return (
    // some kind of map through a state thats passed down to here
    <table id='display'>
      <thead>
        <tr>
          <th colspan='2'>Glossary Table</th>
        </tr>
      </thead>
      <tbody>
        {tableValues}
      </tbody>
    </table>
  )
}

export default Table;