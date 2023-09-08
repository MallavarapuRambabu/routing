import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <Link to ="/">home</Link>
        <Link to ="/dashbord">dashbord</Link>
        <Link to ="/contact">contact</Link>
        <Link to = "/users">users</Link>
      
    </div>
  )
}

export default Navbar
