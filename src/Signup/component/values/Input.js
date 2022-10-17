import React, { Component } from 'react'
import './Input.css'
export default class  extends Component {
  render() {
    return (
      <div className='inputs'>
        <div className='fields'>
        <input type="text" className='placeholder valign-text-middle' placeholder='Username' style={{border: '1px solid rgba(5, 23, 51, 0.6)'}}/>
        
        <input type="password" className='placeholder valign-text-middle' placeholder='Password'/>

        <input type="password" className='placeholder valign-text-middle' placeholder='Confirm Password'/>

        <button type="submit" className='button' value="submit" href="#">Login</button>
        
        <a href='#' className='link'>Already have and account ? Login</a>

      </div>
      </div>
    )
  }
}
