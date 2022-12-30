import React from 'react';
import { useState } from 'react';

function Add (props) {

  return ([
    <div id='add'>
      {props.show && (
      <form >
        <input id='term' value={props.term} placeholder='Key Term' type='text' onChange={props.termChange}></input>
        <input id='def' value={props.def} placeholder='Definition' type='text' onChange={props.defChange}></input>
        <button type='button' onClick={props.click}> Add To Glossary </button>
      </form>
      )}
    </div>,
    <div>
      <form className='search'>
        <input value={props.searchTerm} type='text' className='searchField' placeholder="search" onChange={props.searchInput}></input>
        <button type='button' onClick={props.search}> Search </button>
      </form>
    </div>
  ])

}

export default Add;