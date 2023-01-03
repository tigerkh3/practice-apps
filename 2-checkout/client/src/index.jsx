import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import Form1 from './components/Form1.jsx'
import Form2 from './components/Form2.jsx'
import Form3 from './components/Form3.jsx'

// create our app component here
function App () {

  return ([
    <div>
    <p> Welcome to Checkout </p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
  </div>,
  <div>
    <button type='button'> Checkout! </button>
    <Form1 />
    <Form2 />
    <Form3 />
  </div>
  ])
}

ReactDOM.render(<App />, document.getElementById('root'));