import React from 'react'
import { useNavigate } from 'react-router-dom'
function PageNotFound() {
    let navigete = useNavigate()
  return (
    <div>
      <h1 onClick={()=>{navigete("/")}}>PageNotFound- 404</h1>
    </div>
  )
}

export default PageNotFound
