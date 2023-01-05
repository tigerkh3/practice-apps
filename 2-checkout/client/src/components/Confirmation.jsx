import React from 'react';

function Confirmation (props) {
  if (props.view) {
    return ([
      <div className='error'>
      {!props.fields && (
        <div> !! Error !! Please fill out all fields before continuing! </div>
      )}
      </div>,
      <div>
        <div>Please confirm all purchase information below: </div>
        <div> info mapped out info here </div>
        <button onClick={props.next}> Purchase </button>
      </div>
    ])
  } else {
    return null;
  }
}

export default Confirmation;
