import React from 'react'

// this will generate a list of all our terms and definitions
function Table (props) {

  console.log(props.glossary)

  var tableValues = props.glossary.map( (currAddition) =>
      <li>{currAddition.definition}</li>
  );

  console.log(tableValues);

  return (
    // some kind of map through a state thats passed down to here
    <ul>
      {tableValues}
    </ul>
  )
}

export default Table;