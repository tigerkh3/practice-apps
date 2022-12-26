import React from 'react';
import { useState } from 'react';

function Add (props) {

  return (
    <div id='add'>
      <input id='term' value={props.term} placeholder='Key Term' type='text' onChange={props.termChange}></input>
      <input id='def' value={props.def} placeholder='Definition' type='text' onChange={props.defChange}></input>
      <button> Add To Glossary </button>
    </div>
  )

}

export default Add;