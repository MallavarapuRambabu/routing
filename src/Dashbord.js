import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
function Dashbord() {
  return (
    <div>
      Dashbord
      <div className='navbar'>
      <Link to ="/dashbord/newpoject">newpoject</Link>
      <Link to ="/dashbord/fewpoject">fewpoject</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Dashbord
