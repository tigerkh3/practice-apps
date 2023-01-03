import React from 'react'

function Form1 (props) {
  return ([
    <div id='form1'>
      Account Creation Form! Please fill out the following fields below:
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
      <button> Next </button>
    </div>
  ])
}

export default Form1;
