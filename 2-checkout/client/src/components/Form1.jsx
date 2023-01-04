import React from 'react'

function Form1 (props) {
  if (props.view) {
    return ([
      <div className='error'>
        {!props.fields && (
          <div> !! Error !! Please fill out all fields before continuing! </div>
        )}
      </div>,
      <div id='form1'>
        <div className='statement'>
        Account Creation Form! Please fill out the following fields below:
        </div>
        <form>
          <div>
            <div> Name </div>
            <input className='field' type='text' placeholder='Name'></input>
          </div>
          <div>
            <div> E-mail </div>
            <input className='field' type='text' placeholder='E-mail'></input>
          </div>
          <div>
            <div> Password </div>
            <input className='field' type='text' placeholder='Password'></input>
          </div>
        </form>
        <button value='form2' onClick={props.next}> Next </button>
      </div>
    ])
  } else {
    return null;
  }
}

export default Form1;
