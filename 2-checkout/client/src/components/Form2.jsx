import React from 'react'

function Form2 () {
  return ([
    <div id='form2'>
      Please fill out the shipping information form below:
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
      <button> Next </button>
    </div>
  ])
}

export default Form2;