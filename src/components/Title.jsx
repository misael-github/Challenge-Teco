import React from 'react'
import "../styles/title.css"
const Title = (props) => {
  return (
    <>
      <h1 className='title'>{props.title}</h1>
    </>
  )
}

export default Title;
