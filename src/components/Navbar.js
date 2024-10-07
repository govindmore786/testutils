import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
 
  return (
    <nav className={props.mode}><li>
       <Link to="/textform" className='link'>Home</Link></li>
    <li><Link to="/about" className='link'>About</Link></li>
    <li><Link to="/about" className='link'>Contact</Link></li>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"  onClick={props.togglemode} role="switch" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.togglemode}>Dark mode</label>
</div></nav>
  )
}
