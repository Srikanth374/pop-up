import React from 'react'
import './modal.css'

function Model({props}) {
  return ( 
    <div className='ModalPopUp'>
    <div className='modalContainer'>
        <div className="titleCloseBtn">
            <button onClick={() => props(false)}>x</button> 
        </div>
        <div className='title'>
            <h1>Are Sure You Want to Continue</h1>
        </div>
        <div className='body'>
            <h1>hello</h1>
        </div>
        <div className='footer'>
            <button   onClick={() => props(false)} id="cancelBtn">Close</button>
            <button>Continue</button>
        </div>
    </div>
    </div>
  )
  //Adding lines for testing
}
export default Model