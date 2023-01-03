import React from 'react'

function Form3 () {
  return ([
    <div id='form3'>
      Please fill out the payment information below:
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
      <button> Next </button>
    </div>
  ])
}

export default Form3;