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
        <div className='statement'>
          Account Information:
          {props.formInfo.slice(0, 3).map( (currItem) => {
            return (
              <div> {currItem} </div>
            )
          })}
        </div>
        <div className='statement'>
          Shipping Information:
            {props.formInfo.slice(3, 5).map( (currItem) => {
              return (
                <div> {currItem} </div>
              )
            })}
        </div>
        <div className='statement'>
          Payment Information:
          {props.formInfo.slice(5).map( (currItem) => {
            return (
              <div> {currItem} </div>
            )
          })}
        </div>
        <button onClick={props.next}> Purchase </button>
      </div>
    ])
  } else {
    return null;
  }
}

export default Confirmation;
