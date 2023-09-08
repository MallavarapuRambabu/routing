import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data'

function UseDetailss() {
    let {id} = useParams()
    let detals = data.find((obj)=>obj.id == id)
  return (
    <div className='cardStyles '>
      usedetails
      <h1>{detals.name}</h1>
      <div class="card">
  <img src="img_avatar.png" alt="Avatar" width="100%"/>
  <div class="container">
  <h4>{detals.name}</h4>
    <p>{detals.email}</p> 
  </div>
</div>
      
    </div>
  )
}

export default UseDetailss
