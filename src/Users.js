import React from 'react'
import userdata from "./data"
import { Link } from 'react-router-dom'


function Users() {
  return (
    <div>
        <h1>hellow</h1>
        <div className='wrap'>
        {userdata && userdata.map((onj)=>{
            const {id,name,email} = onj
            return <Link key={id} to={`/users/${id}`} >
                <div class="card">
  {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
  <div class="container">
    <h4><b>{name}</b></h4> 
    <p>{email}</p> 
  </div>
</div>
            </Link>
        })}
      </div>
    </div>
  )
}

export default Users
