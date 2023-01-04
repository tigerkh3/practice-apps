import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import Form1 from './components/Form1.jsx'
import Form2 from './components/Form2.jsx'
import Form3 from './components/Form3.jsx'
import { Promise } from 'bluebird';

// create our app component here
function App () {

  // states will be set below

  // state for the three forms to be viewable
  const [form1View, setForm1View] = useState(false);
  const [form2View, setForm2View] = useState(false);
  const [form3View, setForm3View] = useState(false);

  // state for all fields being filled
  const [fieldsFilled, setFieldsFilled] = useState(true);
  // state for holding form1 information
  const [form1, setForm1] = useState([]);
  const [form2, setForm2] = useState([]);
  const [form3, setForm3] = useState([]);

  // useeffect so form3 updates properly on purchase update properly
  useEffect( () => {
    // we would have our server call happen somehwere here maybe..
    // probably use an if statement so it does fire on app start up
    // aka only when our form 3 information is filled out.

  }, [form3])

  // event handler methods
    // form view function for forms 1 and 2, this handles the form visbility and also collects information
    // from the forms so we can use it in our server data

  function viewForm (e) {
    e.preventDefault();
    // we want this function to work with all forms to make it easier
    // if the event target value is form1
    if (e.target.value === 'form1' && form2View === false && form3View === false) {
      // first show shows up
      setForm1View(true);
    } else if (e.target.value === 'form2' && form3View === false) {
      // rather than creating 20 different states we can just grab all the values before hiding our element
      // and create one state per form
      var inputs = fieldValues();
      if (inputs.length === 3) {
        setForm1(inputs)
        setFieldsFilled(true);
        setForm1View(false);
        setForm2View(true)
      } else {
        setFieldsFilled(false);
      }
      // we also want to get all the input values for form
    } else if (e.target.value === 'form3' && form3View === false) {
      var inputs = fieldValues();
      if (inputs.length >= 5) {
        setForm2(inputs)
        setFieldsFilled(true);
        setForm2View(false);
        setForm3View(true)
      } else {
        setFieldsFilled(false);
      }
    }
  }
    // form 3 purchase function that sends all data to our server
    function purchase (e) {
      e.preventDefault();

      // we want to first update form3s array of values here
      // run our helper
      var inputs = fieldValues();
      if (inputs.length === 4) {
        setForm3(inputs)
        setFieldsFilled(true);
        setForm3View(false);
      } else {
        setFieldsFilled(false);
      }
    }

  // create helper function for grabbing input field values
  function fieldValues () {
    var result = [];
    var inputs = document.getElementsByClassName('field')
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length > 0) {
      result.push(inputs[i].value)
      }
    }
    return result;
  }

  Promise.promisify(fieldValues);

  return ([
    <div>
    <p> Welcome to Checkout </p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
  </div>,
  <div>
    <button value='form1' type='button' onClick={viewForm}> Checkout! </button>
    <Form1 fields={fieldsFilled} next={viewForm} view={form1View}/>
    <Form2 fields={fieldsFilled} next={viewForm} view={form2View}/>
    <Form3 fields={fieldsFilled} next={purchase} view={form3View}/>
  </div>
  ])
}

ReactDOM.render(<App />, document.getElementById('root'));