import React from 'react'
import "../styles/title.css"

const Title = (props) => {
  return (
    <div className="container-title">
      <h1 className='title'>{props.title}</h1>
      </div>
    
  )
}

export default Title;
