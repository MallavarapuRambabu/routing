import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  let navigate = useNavigate()
  return (
    <div>
      home 
      <button type='button' onClick={()=>{
        navigate("/sucess")
      }}>submited</button>
    </div>
  )
}

export default Home
