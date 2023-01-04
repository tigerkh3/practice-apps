import React from 'react'

function Form2 (props) {
  if (props.view) {
    return ([
      <div className='error'>
      {!props.fields && (
        <div> !! Error !! Please fill out all fields before continuing! </div>
      )}
    </div>,
      <div id='form2'>
        <div className='statement'>
        Please fill out the shipping information form below:
        </div>
        <form>
          <div>
            <div>
                Street Address
            </div>
              <input className='field' type='text' placeholder='Line 1'></input>
              <input className='field' type='text' placeholder='Line 2'></input>
            </div>
          <div>
            <div>
              <div>
                City
              </div>
              <input className='field' type='text' placeholder='City'></input>
            </div>
            <div>
              <div>
                State
              </div>
              <input className='field' type='text' placeholder='State'></input>
            </div>
            <div>
              <div>
                Zip Code
              </div>
              <input className='field' type='text' placeholder='Zip Code'></input>
            </div>
            <div>
              <div>
                Phone Number
              </div>
              <input className='field' type='text' placeholder='Phone Number'></input>
            </div>
          </div>
        </form>
        <button value='form3' onClick={props.next}> Next </button>
      </div>
    ])
  } else {
    return null;
  }
}

export default Form2;