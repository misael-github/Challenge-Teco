import React from 'react'
import "../styles/input.css"
const Input = (props) => {
  return (
    <>
      <input className={props.className} placeholder={props.placeholder}></input>
    </>
  )
}

export default Input
