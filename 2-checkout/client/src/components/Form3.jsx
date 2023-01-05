import React from 'react'

function Form3 (props) {
  if (props.view) {
    return ([
      <div className='error'>
      {!props.fields && (
        <div> !! Error !! Please fill out all fields before continuing! </div>
      )}
    </div>,
      <div id='form3'>
        <div className='statement'>
        Please fill out the payment information below:
        </div>
        <form>
          <div>
            <div> Credit Card Number </div>
            <input className='field' type='text' placeholder='Credit Card Number'></input>
          </div>
          <div>
            <div> Expiration Date </div>
            <input className='field' type='text' placeholder='Expiration Date'></input>
          </div>
          <div>
            <div> CVV </div>
            <input className='field' type='text' placeholder='CVV'></input>
          </div>
          <div>
            <div> Billing Zip Code </div>
            <input className='field' type='text' placeholder='Billing Zip Code'></input>
          </div>
        </form>
        <button value='confirmation' onClick={props.next}> Next </button>
      </div>
    ])
  } else {
    return null;
  }
}

export default Form3;