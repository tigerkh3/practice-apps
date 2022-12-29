import React from 'react';
import { useState } from 'react';

function Add (props) {

  return (
    <div>
      {props.show && (
      <form id='add'>
        <input id='term' value={props.term} placeholder='Key Term' type='text' onChange={props.termChange}></input>
        <input id='def' value={props.def} placeholder='Definition' type='text' onChange={props.defChange}></input>
        <button type='button' onClick={props.click}> Add To Glossary </button>
      </form>
      )
    }
    </div>
  )

}

export default Add;